import { FiThumbsUp } from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles';

export default function Card() {
  return (
    <CardContainer>
      <ImageBackground src='https://cdn-jghdn.nitrocdn.com/WaAKrPwVavvRtmiuchNkiowpZvENVGmM/assets/images/optimized/rev-f477451/www.homehost.com.br/blog/wp-content/uploads/2019/07/htmlcssjs.jpg' />
      <Content>
        <UserInfo>
          <UserPicture src='https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/56670/5e686cf06d65bdbe03bd9d14e2d438b03f76a5a5/original/img-20220430-225159-656.jpg/!!/meta:eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ==' />
          <div>
            <h4>Nala</h4>
            <p>há minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp dio Global
            Avante... <strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp/>
            10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
