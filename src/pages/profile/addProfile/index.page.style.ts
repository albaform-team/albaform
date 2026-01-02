import Image from 'next/image';

import styled from '@emotion/styled';
import { Input, Select, TextField } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const AddProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: ${colors.gray[5]};

  @media ${media.tablet} {
    padding: 60px 0;
  }

  @media ${media.desktop} {
    align-items: flex-start;
    padding: 60px 0;
  }
`;

export const AddProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 500px;

  @media ${media.tablet} {
    gap: 32px;
    align-items: center;
    justify-content: center;
  }
`;

export const AddProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 351px;

  @media ${media.tablet} {
    gap: 32px;
    width: 680px;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

export const AddProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddProfileTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const CloseButton = styled(Image)`
  cursor: pointer;

  @media ${media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const AddInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${media.tablet} {
    gap: 24px;
  }
`;

export const ProfileBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileOption = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${colors.black};
`;

export const InputBox = styled(Input)`
  width: 100%;
  height: 58px;
  padding: 16px 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
`;

export const ProfileOptionSelect = styled(Select)`
  width: 100%;
  height: 58px;
  padding: 16px 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
`;

export const TextInputBox = styled(TextField)`
  width: 100%;

  & .MuiOutlinedInput-root {
    align-items: flex-start;
    height: 153px;
    padding: 16px 20px;
    background-color: ${colors.white};
    border-radius: 6px;

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.gray[30]};
      border-width: 1px;
    }
  }

  & textarea {
    padding: 0;
  }
`;
