import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { ReactComponent as SearchLogo } from './img/search.svg';
import { ReactComponent as EmailLogo } from './img/mail.svg';
import { ReactComponent as HideEye } from './img/hide.svg';
import { ReactComponent as OpenEye } from './img/view.svg';
import { ReactComponent as CloseCross } from './img/close.svg';
import { ReactComponent as UserProfile } from './img/user profile.svg';
import { InputContainer } from './Input.styles';

interface IInput {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isActive: boolean;
}

type LogosType = {
  search: React.ElementType;
  email: React.ElementType;
  fullname: React.ElementType;
};

export const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  value,
  title,
  onChange,
  isActive,
}) => {
  const [inputState, setInputState] = useState(isActive);

  const onFormFocus = () => { setInputState(true); };

  const onFormBlur = () => { setInputState(false); };

  const [hideEye, setHideEye] = useState(false);

  const logo: LogosType = {
    search: SearchLogo,
    email: EmailLogo,
    fullname: UserProfile,
  };

  const InputLogo = logo[name as keyof LogosType];

  const EyeLogo = !hideEye ? HideEye : OpenEye;

  const onClickEye = () => {
    if (hideEye) {
      setHideEye(false);
    } else {
      setHideEye(true);
    }
  };

  return (
    <InputContainer
      onFocus={onFormFocus}
      onBlur={onFormBlur}
      filterLogo={inputState}
      isActive={isActive}
      inputType={name}
    // tabIndex={1}
    >
      {type === 'password' ? <EyeLogo className="input__eye" onClick={onClickEye} />
        : <InputLogo className="input__general" />}
      <input
        className="input__inner"
        name={name}
        type={hideEye ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}

      />
      {inputState && <label className="input__title">{title}</label>}
      {inputState && !isActive && <CloseCross className="input__cross" onClick={() => {
        // eslint-disable-next-line no-console
        console.log('asd');
      }} />}
    </InputContainer>
  );
};
