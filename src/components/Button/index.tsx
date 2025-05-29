import { ButtonContainer } from './styles';
import { IButtom } from './types';

export default function Button({ title, variant = 'primary', onClick }:IButtom) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
