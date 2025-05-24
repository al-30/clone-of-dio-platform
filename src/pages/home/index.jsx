import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Button title={'teste 1'} />
      <Button variant='secondary' title={'teste 2'} />
      <Link to='/login'>Ir para o login</Link>
    </>
  );
}
