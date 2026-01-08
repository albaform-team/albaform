import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useCallback, useEffect, useState } from 'react';

import DefaultImage from '@/assets/png/DefaultImageSrc.png';
import { RECENT_NOTICE_KEY } from '@/constants/recentNotice';
import {
  applyNotice,
  cancelApplication,
  getNoticeDetail,
} from '@/lib/services/noticeService';
import { GetUserApplications } from '@/lib/services/userService';
import { AppliedJobListItem } from '@/pages/profile/[userId]/_utils/mapper';
import useAuthStore from '@/stores/useAuthStore';
import { ApplicationStatus } from '@/types/api/userAppliedJobList';
import { NoticeItem } from '@/types/user/notice';
import { formatDateTimeRange } from '@/utils/date';

import ListCard from '../../_components/ListCard/ListCard';
import CancelModal from '../../_components/Modal/CancelModal';
import LoginModal from '../../_components/Modal/LoginModal';
import ProfileRegisterModal from '../../_components/Modal/ProfileRegisterModal';

import * as S from './index.page.style';

const getMatchingApplication = (
  noticeId: string,
  applications: AppliedJobListItem[]
): AppliedJobListItem | undefined => {
  for (const application of applications) {
    if (application.notice && application.notice.id === noticeId) {
      return application;
    }
  }
};

const StoreDetailPage = () => {
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  const user = useAuthStore(s => s.user);
  const [Test, setTest] = useState<ApplicationStatus>('canceled');
  const [notice, setNotice] = useState<NoticeItem | null>(null);
  const [closed, setClosed] = useState<boolean>(false);
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);
  const [cancelModalOpen, setCancelModalOpen] = useState<boolean>(false);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [recentNotices, setRecentNotices] = useState<NoticeItem[]>([]);
  const fetchNotice = useCallback(async () => {
    try {
      if (typeof shopId === 'string' && typeof noticeId === 'string') {
        const data = await getNoticeDetail(shopId, noticeId);
        setNotice(data);
        setImage(data.shop.item.imageUrl);

        if (user?.id) {
          const userApplications = await GetUserApplications(
            user?.id as string,
            0,
            100
          );
          const currentApplication = getMatchingApplication(
            noticeId as string,
            userApplications.items
          );

          setTest(currentApplication?.status || 'canceled');
          setCancelModalOpen(false);
        }
        if (data.closed) {
          setClosed(true);
        } else {
          setClosed(false);
        }
      }
    } catch (error) {
      console.error('공고 상세 불러오기 실패:', error);
    }
  }, [noticeId, shopId, user?.id]);

  useEffect(() => {
    if (!shopId || !noticeId) return;

    fetchNotice();
  }, [shopId, noticeId, fetchNotice]);

  const handleCancel = () => {
    setCancelModalOpen(true);
  };

  const [image, setImage] = useState<string | StaticImageData | undefined>(
    notice?.shop.item.imageUrl
  );

  useEffect(() => {
    if (!notice) return;

    const currentNotice: NoticeItem = {
      id: notice.id,
      hourlyPay: notice.hourlyPay,
      startsAt: notice.startsAt,
      workhour: notice.workhour,
      description: notice.description,
      closed: notice.closed,
      shop: {
        item: notice.shop.item,
      },
    };

    const stored = localStorage.getItem(RECENT_NOTICE_KEY);
    const parsed: NoticeItem[] = stored ? JSON.parse(stored) : [];

    const filtered = parsed.filter(item => item.id !== currentNotice.id);

    const updated = [currentNotice, ...filtered];

    const limited = updated.slice(0, 6);

    localStorage.setItem(RECENT_NOTICE_KEY, JSON.stringify(limited));
    setRecentNotices(limited);
  }, [notice]);
  if (!notice) return;

  const increaseRatePercent =
    Math.floor(
      (notice?.hourlyPay - notice?.shop.item.originalHourlyPay) /
        notice?.shop.item.originalHourlyPay
    ) * 100;

  const isIncrease = increaseRatePercent > 0;

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  const handleClick = async () => {
    if (!user?.id) {
      setLoginModalOpen(true);
      return;
    }

    if (!user.bio && !user.name && !user.phone && !user.address) {
      setProfileModalOpen(true);
      return;
    }

    await applyNotice(shopId as string, noticeId as string);
    setTest('pending');
  };

  const handleConfirmCancel = async () => {
    const userApplications = await GetUserApplications(
      user?.id as string,
      0,
      100
    );
    const currentApplication = getMatchingApplication(
      noticeId as string,
      userApplications.items
    );

    const res = await cancelApplication(
      shopId as string,
      noticeId as string,
      currentApplication?.id as string
    );
    setCancelModalOpen(false);
    setTest(res.status);
  };

  return (
    <S.DetailContainer>
      <S.JobSummarySection>
        <S.JobSummaryTitle>
          <S.SubTitle>{notice.shop.item.category}</S.SubTitle>
          <S.MainTitle>{notice.shop.item.name}</S.MainTitle>
        </S.JobSummaryTitle>
        <S.SummaryCardContainer>
          <S.SummaryCardImage>
            {closed && <S.ExpiredOverlay>마감 완료</S.ExpiredOverlay>}
            <Image
              src={image || DefaultImage}
              alt="식당 이미지"
              fill
              style={{ objectFit: 'cover' }}
              onError={() => {
                setImage(DefaultImage);
              }}
            />
          </S.SummaryCardImage>
          <S.SummaryCardInfo>
            <S.HourlyPay>시급</S.HourlyPay>
            <S.PayInfo>
              <S.Pay>{notice.hourlyPay.toLocaleString()}원</S.Pay>
              {isIncrease && (
                <S.PayIncrease>
                  기존 시급보다 {increaseRatePercent}%️️
                  <S.ArrowIcon />
                </S.PayIncrease>
              )}
            </S.PayInfo>
            <S.InfoList>
              <S.ClockIcon />
              <S.WorkInfo>
                {formatDateTimeRange(notice.startsAt, {
                  durationHours: notice.workhour,
                })}{' '}
              </S.WorkInfo>
            </S.InfoList>
            <S.InfoList>
              <S.NavIcon />
              <S.WorkInfo>{notice.shop.item.address1}</S.WorkInfo>
            </S.InfoList>
            <S.StoreDescription>
              {notice.shop.item.description}
            </S.StoreDescription>
            {closed ? (
              <S.EndButton>신청 불가</S.EndButton>
            ) : Test === 'pending' ? (
              <S.CancelButton onClick={handleCancel}>취소하기</S.CancelButton>
            ) : (
              <S.ApplyButton onClick={handleClick}>신청하기</S.ApplyButton>
            )}
            {profileModalOpen && (
              <ProfileRegisterModal
                open={profileModalOpen}
                onClose={() => setProfileModalOpen(false)}
              />
            )}
            {cancelModalOpen && (
              <CancelModal
                open={cancelModalOpen}
                onClose={() => setCancelModalOpen(false)}
                onConfirm={handleConfirmCancel}
              />
            )}
            {loginModalOpen && (
              <LoginModal
                open={loginModalOpen}
                onClose={() => setLoginModalOpen(false)}
              />
            )}
          </S.SummaryCardInfo>
        </S.SummaryCardContainer>
        <S.JobDescription>
          <S.JobTitle>공고 설명</S.JobTitle>
          <S.DetailJobDescription>{notice.description}</S.DetailJobDescription>
        </S.JobDescription>
      </S.JobSummarySection>
      <S.RecentViewSection>
        <S.RecentViewTitleBox>
          <S.RecentViewTitle>최근에 본 공고</S.RecentViewTitle>
        </S.RecentViewTitleBox>
        <S.RecentViewList>
          {recentNotices.map(item => (
            <Link key={item.id} href={`/store/${item.shop.item.id}/${item.id}`}>
              <ListCard notice={item} />
            </Link>
          ))}
        </S.RecentViewList>
      </S.RecentViewSection>
    </S.DetailContainer>
  );
};

export default StoreDetailPage;
