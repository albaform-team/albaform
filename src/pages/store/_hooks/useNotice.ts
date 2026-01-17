import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import { NoticeListResponse } from '@/types/user/noticeList';

type UseNoticeProps = {
  sortValue: string;
  keyword?: string;
  offset: number;
  limit: number;
  address?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  trigger?: number;
};

export const useNotice = ({
  sortValue,
  keyword,
  offset,
  limit,
  address,
  startsAtGte,
  hourlyPayGte,
  trigger,
}: UseNoticeProps) => {
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchNotice = async () => {
      const sortMap: Record<string, 'time' | 'pay' | 'hour' | 'shop'> = {
        마감임박순: 'time',
        시급많은순: 'pay',
        시간적은순: 'hour',
        가나다순: 'shop',
      };

      const data = await getNotice({
        sort: sortMap[sortValue],
        keyword: keyword,
        offset: offset,
        limit: limit,
        address: address,
        startsAtGte: startsAtGte,
        hourlyPayGte: hourlyPayGte,
      });
      setNotice(data);
      setLoading(false);
    };
    fetchNotice();
  }, [
    sortValue,
    keyword,
    offset,
    limit,
    address,
    startsAtGte,
    hourlyPayGte,
    trigger,
  ]);

  return { notice, loading };
};
