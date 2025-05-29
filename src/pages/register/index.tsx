import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import * as yup from 'yup';
import Button from '../../components/Button';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import { IFormData } from '../login/types';
import {
  Column,
  Container,
  SubtitleRegister,
  Text,
  TextLogin,
  Title,
  TitleRegister,
  Wrapper
} from './styles';

export default function Register() {
  const schema = yup.object({
    email: yup
      .string()
      .email('email não é valido')
      .required('campo obrigatorio'),
    name: yup.string().required('Campo obrigatorio'),
    password: yup
      .string()
      .min(3, 'A senha dever ter no minimo 3 caracteres')
      .required('Campo Obrigatorio'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit = async (formData:IFormData) => {
    console.log(`email: ${formData.email}; senha: ${formData.password}`);
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
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubtitleRegister>
            Crie sua conta e make the change._
          </SubtitleRegister>

          <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder='Nome Completo'
                name='name'
                control={control}
                errorMessage={errors.name?.message}
                leftIcon={<MdPerson />}
              />
              <Input
                placeholder='E-mail'
                name='email'
                errorMessage={errors.email?.message}
                control={control}
                leftIcon={<MdEmail />}
              />
              <Input
                placeholder='Password'
                name='password'
                errorMessage={errors.password?.message}
                control={control}
                leftIcon={<MdLock />}
              />
              <Button
                title='Criar minha conta'
                variant='secondary'
                type='submit'
              />
            </form>
            <Text>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Text>
            <TextLogin>
              Já tenho conta. <span>Fazer Login</span>
            </TextLogin>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
