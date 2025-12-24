import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 40px 12px;
`;

export const Button = styled.button`
  background-color: #ea3c12;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 6px;
`;

export const Title = styled.h1`
  text-align: left;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid #e5e4e7;
  padding: 60px 24px;
  width: 100%;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #111322;
`;
