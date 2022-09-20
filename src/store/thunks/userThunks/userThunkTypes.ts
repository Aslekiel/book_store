export interface IResDataType {
  user: IUserType | null;
}

export interface IUserType {
  id?: number | string;
  fullname?: string;
  email: string;
  avatar?: string;
}

export type UserPasswordsType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export interface IPropsType {
  fullname?: string;
  email: string;
  password?: string;
}
