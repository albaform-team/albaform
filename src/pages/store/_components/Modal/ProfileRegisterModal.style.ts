import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 298px;
  height: 184px;
  background-color: ${colors.white};
  border-radius: 12px;
  transform: translate(-50%, -50%);
`;

export const ModalText = styled.div`
  margin-top: 16px;
`;

export const ModalButton = styled(Button)`
  width: 80px;
  height: 38px;
  margin-top: 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;
  border: solid 1px #ea3c12;
  border-radius: 6px;
`;
