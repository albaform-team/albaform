import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 72px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const HomeButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
  background-color: #ea3c12;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
