import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 327px;
  height: 220px;
  padding-bottom: 28px;
  background-color: ${colors.white};
  border-radius: 8px;
  transform: translate(-50%, -50%);

  @media ${media.tablet} {
    width: 540px;
    height: 250px;
    padding: 28px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const ModalText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: #333236;

  @media ${media.tablet} {
    font-size: 18px;
  }
`;

export const ModalButton = styled(Button)`
  width: 138px;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: ${colors.white};
  background-color: #ea3c12;
  border-radius: 8px;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const AddButton = styled(Button)`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.white};
  background-color: #ea3c12;
  border-radius: 6px;

  @media ${media.tablet} {
    width: 312px;
  }
`;
