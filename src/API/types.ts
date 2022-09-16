export interface IResDataType {
  user: IUserType;
}

interface IUserType {
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
