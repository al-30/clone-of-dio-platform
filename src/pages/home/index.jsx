import bannerImage from '../../assets/banner.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, TextContent, Title, TitleHightLight } from './styles';
export default function Home() {
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
            onClick={() => null}
          />
        </div>
        <div>
          <img src={bannerImage} alt='Imagem principal' />
        </div>
      </Container>
    </>
  );
}
