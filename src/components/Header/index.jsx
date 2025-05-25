import logo from '../../assets/logo-dio.png';
import Button from '../Button/';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from './styles';

export default function Header({ userAuthenticated }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='logo da dio' />
          {userAuthenticated ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {userAuthenticated ? (
            <UserPicture src='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ==' />
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title={'Entrar'} />
              <Button title={'Cadastrar'} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
