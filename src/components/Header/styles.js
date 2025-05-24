import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`
  background: #2d2d37;
  border-radius: 8px;
  height: 30px;
  margin: 0 12px;
  padding: 2px 5px;
  width: 175px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  margin-right: 12px;
  text-decoration: none;
`;
export const MenuRight = styled.a`
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  border-radius: 22px;
  border: 2px solid #ffffff;
  height: 32px;
  width: 32px;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  color: #ffffff;
  flex: 1;
`;
