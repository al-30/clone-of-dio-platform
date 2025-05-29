import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../../components/Button';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from './styles';
import { IFormData } from './types';

export default function Login() {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email('email não é válido')
      .required('Campo obrigatorio'),
    password: yup
      .string()
      .min(3, 'A senha deve ter no minimo 3 caracteres')
      .required('Campo obrigatorio'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData:IFormData) => {
    console.log(`email: ${formData.email}; senha: ${formData.password}`);
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha incorreto');
      }
    } catch (error) {
      console.log(error);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='email'
                control={control}
                errorMessage={errors.email?.message}
                placeholder='email'
                leftIcon={<MdEmail />}
              />
              <Input
                name='password'
                control={control}
                errorMessage={errors.password?.message}
                placeholder='Senha'
                type='password'
                leftIcon={<MdLock />}
              />
              <Button title='Entrar' variant='secondary' type='submit' />
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
