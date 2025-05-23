import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Button title={'teste 1'} />
      <Button variant='secondary' title={'teste 2'} />
      <Link to='/login'>Ir para o login</Link>
    </>
  );
}
