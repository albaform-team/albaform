import Image from 'next/image';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { colors } from '@/styles/colors';

export const FilterButton = styled(Button)`
  width: 79px;
  height: 30px;
  padding: 6.5px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.white};
  background-color: ${colors.red[30]};
  border-radius: 5px;
  box-shadow: none;
`;

export const PopoverContainer = styled(Typography)`
  width: 390px;
  padding: 18px 20px;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DrawerTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};
`;

export const CloseButton = styled(Image)`
  cursor: pointer;
`;

export const DrawerFooter = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const ResetButton = styled(Button)`
  width: 82px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #ea3c12;
  background-color: ${colors.white};
  border: 1px solid #ea3c12;
  border-radius: 6px;
`;

export const ApplyButton = styled(Button)`
  width: 260px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.white};
  background-color: #ea3c12;
  border-radius: 6px;
`;
