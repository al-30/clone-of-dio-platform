import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 20px;
  width: 320px;
`;

export const TitleHightLight = styled.span`
  color: #e4185d;
`;

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
`;
