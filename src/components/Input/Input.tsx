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
  onChange: ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line max-len
export const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const [inputState, setInputState] = useState(false);

  const [hideEye, setHideEye] = useState(false);

  const title =
    name === 'email' || name === 'search' || name === 'name'
      ? name[0].toUpperCase() + name.slice(1)
      : 'Password';

  const onFormFocus = () => {
    setInputState(true);
  };

  const onFormBlur = () => {
    setInputState(false);
  };

  const onClickEye = () => {
    if (hideEye) {
      setHideEye(false);
    } else {
      setHideEye(true);
    }
  };

  let ToggleLogo;
  if (name === 'email') {
    ToggleLogo = EmailLogo;
  } else if (name === 'search') {
    ToggleLogo = SearchLogo;
  } else {
    ToggleLogo = UserProfile;
  }
  const ToggleEyeLogo = !hideEye ? HideEye : OpenEye;

  return (
    <InputContainer
      onFocus={onFormFocus}
      onBlur={onFormBlur}
      filterLogo={inputState}
      inputType={name}>
      {name === 'password' || name === 'confirmPassword' || name === 'newPassword' ? (
        <ToggleEyeLogo
          className="input__eye"
          onClick={onClickEye}
          onMouseDown={() => {
            return false;
          }}
        />
      ) : (
        <ToggleLogo className="input__general" />
      )}
      <input
        className="input__inner"
        name={name}
        type={hideEye ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {inputState && (
        <>
          <label className="input__title">{title}</label>
          <CloseCross className="input__cross" />
        </>
      )}
    </InputContainer>
  );
};
