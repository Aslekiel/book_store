export interface IResDataType {
  user: IUserType;
  books: IBook[];
}

export interface IPropsType {
  fullname?: string;
  email: string;
  password?: string;
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

export interface IBook {
  id?: number | string;
  title: string;
  author: string;
  genre: string;
  description?: string;
  logo: string;
  rating?: string;
  comments?: string;
  price: string;
  dateOfIssue?: string;
}
