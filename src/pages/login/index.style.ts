import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const LoginLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 140px 12px;
`;

export const Title = styled.h1`
  position: relative;
  width: 208px;
  height: 38px;
  margin-bottom: 40px;

  @media ${media.tablet} {
    width: 248px;
    height: 45px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 350px;
  margin-bottom: 16px;

  & label {
    display: block;
    margin-bottom: 8px;
  }

  @media ${media.tablet} {
    margin-bottom: 20px;
  }

  @media ${media.desktop} {
    margin-bottom: 46px;
  }
`;

export const InputBox = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;

    & fieldset {
      border: 1px solid ${colors.gray[30]};
    }

    &:hover fieldset {
      border-color: ${colors.gray[40]};
    }

    &.Mui-focused fieldset {
      border-color: ${colors.gray[50]};
    }
  }

  & .MuiFormHelperText-root {
    margin-top: 8px;
    margin-left: 8px;
  }

  & input {
    padding: 16px 20px;
  }
`;

export const SubmitButton = styled(Button)`
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  background-color: #ea3c12;
  border-radius: 8px;
`;

export const TypographySignUp = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: #333236;

  & a {
    color: #5534da;
    text-decoration: underline;
  }
`;
