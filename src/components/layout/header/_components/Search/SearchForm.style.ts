import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 1024,
  MOBILE: 889,
};

export const SearchBox = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 450px;
  height: 40px;
  padding: 10px;
  background-color: #f2f2f3;
  border-radius: 10px;

  input {
    width: 100%;
    font-size: 14px;
    color: #a4a1aa;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    width: 344px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    width: 100%;
    height: 36px;
    padding: 8px;
  }
`;
