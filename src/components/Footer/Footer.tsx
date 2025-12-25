import Image from 'next/image';
import Link from 'next/link';

import EmailImage from '@/assets/svg/footer/email.svg';
import FacebookImage from '@/assets/svg/footer/facebook.svg';
import InstaImage from '@/assets/svg/footer/instagram.svg';
import * as S from '@/components/Footer/Footer.styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContents>
        <S.FooterCopyright>©codeit - 2023</S.FooterCopyright>
        <S.FooterLinks>
          <div>Privacy Policy</div>FAQ<div></div>
        </S.FooterLinks>
        <S.FooterSocial>
          <Link href="/">
            <S.SocialIcon
              src={EmailImage}
              alt="이메일"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <S.SocialIcon
              src={FacebookImage}
              alt="페이스북"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <S.SocialIcon
              src={InstaImage}
              alt="인스타그램"
              width={25}
              height={25}
            />
          </Link>
        </S.FooterSocial>
      </S.FooterContents>
    </S.FooterContainer>
  );
};

export default Footer;
