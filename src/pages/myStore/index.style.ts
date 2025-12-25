import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
`;

export const Button = styled.button`
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 60px 24px;
  border: 1px solid #e5e4e7;
  border-radius: 12px;
`;

export const CardText = styled.p`
  color: #111322;
  font-size: 14px;
`;
