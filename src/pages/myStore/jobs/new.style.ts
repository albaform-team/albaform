import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import styled from '@emotion/styled';

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
    padding: 60px 32px;
    gap: 32px;
  }

  @media ${media.desktop} {
    max-width: 964px;
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
  justify-content: space-between;
  align-items: center;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media ${media.desktop} {
    flex-wrap: nowrap;
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
  color: #111322;
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
    -moz-appearance: textfield;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TextBox = styled.textarea`
  height: 153px;
  padding: 16px 20px;
  border: 1px solid #cbc9cf;
  border-radius: 6px;

  &::placeholder {
    color: #a4a1aa;
  }
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  width: 327px;
  height: 220px;
  background-color: ${colors.white};
  padding: 30px;
  gap: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
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
    width: 120px;
    font-size: 16px;
    padding: 14px 46px;
    letter-spacing: -0.8px;
    position: relative;
    left: 180px;
  }
`;
