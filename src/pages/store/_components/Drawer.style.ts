import Image from 'next/image';

import styled from '@emotion/styled';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

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

export const DrawerContainer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100vw;
    height: 100vh;
    padding: 24px 20px;
  }
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

export const DetailOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
`;

export const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 2px solid ${colors.gray[10]};
`;

export const DetailOptionTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${colors.black};
`;

export const LocationSelectBox = styled.div`
  display: block;
  width: 100%;
  height: 258px;
  padding: 2px 3px;
  overflow: hidden;
  background-color: ${colors.white};
  border: solid 1px ${colors.gray[20]};
  border-radius: 6px;
`;

export const LocationScrollArea = styled.div`
  height: 100%;
  padding: 20px;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[30]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const LocationSelectOption = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 24px;
`;

export const SelectedLocation = styled.div`
  height: 10px;
`;

export const StartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 2px solid ${colors.gray[10]};
`;

export const StartInput = styled(Input)`
  width: 100%;
  height: 58px;
  padding: 16px 20px;
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
`;

export const PaySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const PayInput = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

export const PayInputBox = styled(Input)`
  width: 169px;
  height: 58px;
  padding: 16px 20px;
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
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
