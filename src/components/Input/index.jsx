import { Controller } from 'react-hook-form';
import { ErrorText, IconContainer, InputContainer, InputText } from './styles';

export default function Input({
  lefIcon,
  name,
  control,
  errorMessage,
  ...rest
}) {
  return (
    <>
      <InputContainer>
        {lefIcon ? <IconContainer>{lefIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
