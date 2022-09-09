import type { ChangeEventHandler } from 'react';

interface IInput {
  className: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line max-len
export const Input: React.FC<IInput> = ({ className, name, type, placeholder, value, onChange }) => {
  return <input
    className={className}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />;
};
