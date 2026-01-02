import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 298px;
  height: 184px;
  padding: 24px;
  background-color: ${colors.white};
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-radius: 8px;

  svg {
    width: 26px;
    height: 26px;
    margin-bottom: 16px;
  }
`;

export const TextBox = styled.p`
  width: 100%;
  margin-bottom: 32px;
  font-weight: 500;
  color: #333236;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModalCloseButton = styled.button`
  width: 80px;
  height: 38px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red[40]};
  border: 1px solid ${colors.red[40]};
  border-radius: 8px;
`;

export const CofirmButton = styled.button`
  width: 80px;
  height: 38px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.red[40]};
  border-radius: 8px;
`;
