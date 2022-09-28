import type { ChangeEventHandler } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchLogo } from '../../assets/search.svg';
import { ReactComponent as EmailLogo } from '../../assets/mail.svg';
import { ReactComponent as HideEye } from '../../assets/hide.svg';
import { ReactComponent as OpenEye } from '../../assets/view.svg';
import { ReactComponent as CloseCross } from '../../assets/close.svg';
import { ReactComponent as UserProfile } from '../../assets/user profile-2.svg';
import { InputContainer } from './Input.styles';
import { booksApi } from '../../api/booksApi';
import { setBooks } from '../../store/books/books';
import { useAppDispatch } from '../../store/hooks/hooks';

interface IInput {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isActive: boolean;
  isError?: boolean;
  defaultClassState?: boolean;
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
  isError,
  defaultClassState,
}) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [inputState, setInputState] = useState(false);

  const [inputValue, setInputValue] = useState(value);

  const inputMod = isError ? 'err' : 'acc';

  const defaultClass = defaultClassState ? !inputValue : true;

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

  const onClickDeleteInputValue = (event: React.MouseEvent<SVGElement>) => {
    setInputState(false);
    event.preventDefault();
    setInputValue('');
    if (title === 'Search') {
      (async () => {
        try {
          const res = await booksApi.getAllBooks();
          dispatch(setBooks(res.data));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      })();
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setInputValue(event.currentTarget.value);
    // eslint-disable-next-line no-unused-expressions
    () => navigate('/');
  };

  const onKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setInputState(false);
    }
  };

  return (
    <InputContainer
      onFocus={onFormFocus}
      onBlur={onFormBlur}
      onKeyDown={onKeyPressed}
      filterLogo={inputState}
      isActive={isActive}
    >
      {type === 'password'
        ? (<EyeLogo
          className="input__eye"
          onClick={onClickEye}
        />)
        : <InputLogo className="input__general" />}
      <input
        className={defaultClass
          ? 'input__inner'
          : `input__inner--${inputMod}`
        }
        name={name}
        type={hideEye ? 'text' : type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInput}
        disabled={isActive}
        autoComplete={title === 'Search' ? 'off' : 'on'}
      />
      {inputState || isActive
        ? (
          <label
            className={defaultClass
              ? 'input__title'
              : `input__title--${inputMod}`
            }
          > {title}
          </label>
        ) : null
      }
      {
        inputValue && !isActive && (
          <CloseCross
            className={
              defaultClass
                ? 'input__cross'
                : `input__cross--${inputMod}`
            }
            onClick={onClickDeleteInputValue}
          />)
      }
    </InputContainer >
  );
};
