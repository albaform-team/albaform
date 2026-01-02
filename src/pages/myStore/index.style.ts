import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  min-height: 100vh;
  padding: 40px 12px;
  margin: 0 auto;

  @media ${media.tablet} {
    padding: 60px 32px;
  }

  @media ${media.desktop} {
    max-width: 965px;
    padding: 80px 0;
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 37px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  letter-spacing: -1.5px;
  background-color: ${colors.red[40]};
  border-radius: 6px;

  @media ${media.tablet} {
    min-width: 346px;
    height: 47px;
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  width: 100%;
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
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 60px 24px;
  border: 1px solid ${colors.gray[20]};
  border-radius: 12px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
  }
`;
