import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 327px;
  height: 220px;
  padding: 24px;
  background-color: ${colors.white};
  border-radius: 8px;
  transform: translate(-50%, -50%);

  @media ${media.tablet} {
    width: 540px;
    height: 250px;
  }
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  border-radius: 8px;

  @media ${media.tablet} {
    gap: 45px;
    align-items: flex-end;
  }
`;

export const TextBox = styled.p`
  width: 100%;
  font-weight: 500;
  color: #333236;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const ModalCloseButton = styled.button`
  width: 138px;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
  background-color: ${colors.red[40]};
  border-radius: 8px;

  @media ${media.tablet} {
    width: 120px;
    height: 48px;
  }
`;
