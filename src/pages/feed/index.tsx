import Card from '../../components/Card';
import { Header } from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import { Column, Container, Title, TitleHightLight } from './styles';

export default function Feed() {
  return (
    <>
      <Header userAuthenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
          <UserInfo
            percentual={5}
            nome={'Nala'}
            image='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ='
          />
          <UserInfo
            percentual={55}
            nome={'Nala'}
            image='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ='
          />
          <UserInfo
            percentual={80}
            nome={'Nala'}
            image='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ='
          />
          <UserInfo
            percentual={40}
            nome={'Nala'}
            image='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ='
          />
        </Column>
      </Container>
    </>
  );
}
