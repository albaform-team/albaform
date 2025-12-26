import styled from '@emotion/styled';
import { media } from '@/styles/media';
import { colors } from '@/styles/colors';

export const Container = styled.div`
  min-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;

  @media ${media.tablet} {
    padding: 60px 32px;
  }

  @media ${media.desktop} {
    max-width: 965px;
    padding: 80px 0;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${colors.red[40]};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;

  @media ${media.tablet} {
    min-width: 346px;
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
  color: ${colors.black};
  font-size: 14px;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;
