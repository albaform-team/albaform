import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.gray[5]};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 40px 12px 100px;
  margin: 0 auto;

  @media ${media.tablet} {
    gap: 32px;
    padding: 60px 32px;
  }

  @media ${media.desktop} {
    max-width: 964px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media ${media.tablet} {
    gap: 32px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.red[40]};
  border-radius: 6px;

  @media ${media.tablet} {
    width: 312px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: left;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const Wraps = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${media.tablet} {
    flex-flow: row wrap;
    gap: 20px;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;

  @media ${media.tablet} {
    width: calc(50% - 10px);
  }
`;

export const InputWrapImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;

  @media ${media.tablet} {
    max-width: 483px;
  }
`;

export const InputWrapExplain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;
`;

export const InputWrapLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.black};
`;

export const TextWon = styled.p`
  position: absolute;
  top: 48px;
  right: 20px;
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;

  &::placeholder {
    color: #a4a1aa;
  }

  &[type='number'] {
    appearance: textfield;
  }

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  &::-webkit-outer-spin-button {
    margin: 0;
    appearance: none;
  }
`;

export const Select = styled.select`
  padding: 16px 20px;
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
`;

export const StoreImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${colors.gray[10]};
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;
`;

export const TextBox = styled.textarea`
  height: 153px;
  padding: 16px 20px;
  border: 1px solid ${colors.gray[30]};
  border-radius: 6px;

  &::placeholder {
    color: #a4a1aa;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: flex-end;
  width: 327px;
  height: 220px;
  padding: 30px;
  background-color: ${colors.white};
  border-radius: 8px;
  transform: translate(-50%, -50%);

  @media ${media.tablet} {
    width: 540px;
    height: 250px;
  }
`;

export const ModalText = styled.p`
  font-size: 16px;

  @media ${media.tablet} {
    font-size: 18px;
  }
`;

export const ModalButton = styled.button`
  width: 138px;
  padding: 12px 56px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
  background-color: ${colors.red[40]};
  border-radius: 6px;

  @media ${media.tablet} {
    position: relative;
    left: 180px;
    width: 120px;
    padding: 14px 46px;
    font-size: 16px;
    letter-spacing: -0.8px;
  }
`;
