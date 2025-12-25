import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 10px;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const LogoImage = styled(Image)`
  width: 112px;
  height: 40px;
  margin: 15px 0;
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 450px;
  height: 40px;
  margin: 15px 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f2f2f3;

  input {
    width: 100%;
    background-color: #f2f2f3;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    border-style: none;

    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 40px;
`;

export const Button = styled(Link)`
  width: 63px;
  color: #111322;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
`;
