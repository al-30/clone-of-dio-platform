import { useNavigate } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import Button from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHightLight } from './styles';

export default function Home() {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightLight>
              Impemente <br />
            </TitleHightLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empreas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title={'Começar agora'}
            variant='secondary'
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt='Imagem principal' />
        </div>
      </Container>
    </>
  );
}
