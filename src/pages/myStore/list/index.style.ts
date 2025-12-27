import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 40px 12px 100px;
  margin: 0 auto;

  @media ${media.tablet} {
    gap: 32px;
    padding: 60px 32px;
  }

  @media ${media.desktop} {
    max-width: 964px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: left;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px;
  background-color: ${colors.red[10]};
  border-radius: 12px;

  @media ${media.tablet} {
    padding: 25px;
  }

  @media ${media.desktop} {
    flex-direction: row;
    gap: 24px;
  }
`;

export const CardImgWrap = styled.div`
  width: 100%;
  height: 178px;
  background-color: ${colors.gray[50]};
  border-radius: 12px;

  @media ${media.tablet} {
    height: 360px;
  }

  @media ${media.desktop} {
    width: 540px;
    height: 308px;
  }
`;

export const CardTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${media.tablet} {
    gap: 12px;
  }

  @media ${media.desktop} {
    gap: 18px;
    justify-content: flex-end;
    width: 346px;
    height: 308px;
  }
`;

export const CardTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardSmallTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red[40]};

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const CardNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export const CardNavText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray[50]};

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const CardTextArea = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const CardButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
`;

export const CardEditButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red[40]};
  background-color: ${colors.white};
  border: 1px solid ${colors.red[40]};
  border-radius: 6px;

  @media ${media.tablet} {
    height: 48px;
    font-size: 16px;
  }
`;

export const CardRegisterButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.red[40]};
  border: none;
  border-radius: 6px;

  @media ${media.tablet} {
    height: 48px;
    font-size: 16px;
  }
`;
