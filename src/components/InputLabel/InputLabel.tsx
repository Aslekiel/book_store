import { InputLabelContainerDefault, InputLabelContainerError } from './InputLabelContainer.styles';

type PropsType = {
  title: string;
  error: string;
  value?: string;
};

export const InputLabel: React.FC<PropsType> = ({ title, error, value }) => {
  return (
    error && value
      ? (
        <InputLabelContainerError>
          {error}
        </InputLabelContainerError>
      ) : (
        <InputLabelContainerDefault value={value}>
          {title}
        </InputLabelContainerDefault>
      )
  );
};
