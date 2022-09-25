export interface IResDataType {
  user: IUserType;
  books: IBook[];
  genres: IBookGenres[];
  filters: string[];
  booksIds: number[];
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
  genres: IBookGenres[];
  description?: string;
  logo: string;
  rating?: string;
  comments?: string;
  price: number;
  dateOfIssue?: string;
}

export interface IBookGenres {
  id?: number;
  name: string;
}
