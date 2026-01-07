import Image from 'next/image';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { colors } from '@/styles/colors';

export const FilterButton = styled(Button)`
  height: 30px;
  padding: 6.5px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.white};
  background-color: ${colors.red[30]};
  border-radius: 5px;
  box-shadow: none;

  &:hover {
    background-color: #fb5a32;
    box-shadow: none;
  }
`;

export const PopoverContainer = styled(Typography)`
  width: 390px;
`;

export const PopoverContents = styled(Typography)`
  margin: 0 20px;
`;

export const DrawerHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 2px;
  background-color: ${colors.white};
`;

export const OptionContainer = styled.div`
  overflow: hidden;
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
  position: sticky;
  bottom: 0;
  z-index: 10;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 2px 15px;
  background-color: ${colors.white};
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

  &:hover {
    background-color: ${colors.gray[10]};
    box-shadow: none;
  }
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

  &:hover {
    background-color: #d9360f;
    box-shadow: none;
  }
`;
