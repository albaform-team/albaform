import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  height: 100%;
  padding: 40px 12px 100px;
  background-color: #fafafa;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: #ea3c12;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;
`;

export const InputWrapLabel = styled.label`
  color: #111322;
  font-size: 16px;
  font-weight: 400;
`;

export const TextWon = styled.p`
  position: absolute;
  top: 48px;
  right: 20px;
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: 1px solid #cbc9cf;
  border-radius: 6px;

  &::placeholder {
    color: #a4a1aa;
  }
`;

export const Select = styled.select`
  padding: 16px 20px;
  border: 1px solid #cbc9cf;
  border-radius: 6px;
`;

export const StoreImgBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #cbc9cf;
  border-radius: 6px;
  background-color: #f2f2f3;
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
