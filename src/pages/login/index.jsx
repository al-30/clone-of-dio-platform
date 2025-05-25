import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import * as yup from 'yup';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';

export default function Login() {
  // const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'A senha deve ter no minimo 3 caracteres').required('Campo obrigatorio'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log(data);

  // const handleClickSignIn = () => {
  //   navigate('/feed');
  // };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>

            <form onSubmit={handleSubmit()}>
              <Input
                name='email'
                control={control}
                errorMessage={errors.email?.message}
                placeholder='email'
                lefIcon={<MdEmail />}
              />
              <Input
                name='password'
                control={control}
                errorMessage={errors.password?.message}
                placeholder='Senha'
                type='password'
                lefIcon={<MdLock />}
              />
              <Button
                // onClick={handleClickSignIn}
                title='Entrar'
                variant='secondary'
                type='submit'
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
