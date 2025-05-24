import { IconContainer, InputContainer, InputText } from './styles';

export default function Input({ lefIcon, name, ...rest }) {
  return (
    <InputContainer>
      {lefIcon ? <IconContainer>{lefIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
}
