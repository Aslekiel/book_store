export interface IResDataType {
  user: IUserType;
  books: IBook[];
  genres: IBookGenres[];
  filters: string[];
  booksIds: number[];
  count: number;
}

export interface IPropsType {
  fullname?: string;
  email: string;
  password?: string;
}

export interface IUserType {
  id?: number;
  fullname?: string;
  email: string;
  avatar?: string;
  cart?: IUserCart[];
  favorites?: IUserFavorites[];
  ratings?: IUserRating[];
}

export type UserPasswordsType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export interface IBook {
  id?: number;
  title: string;
  author: string;
  genres: IBookGenres[];
  description?: string;
  logo: string;
  rating?: string;
  price: number;
  dateOfIssue?: string;
  comments?: IBookComments[];
}

export interface IBookGenres {
  id?: number;
  name: string;
}

export interface IUserCart {
  id: number;
  bookId: number;
  userId: number;
  count: number;
}

export interface IUserFavorites {
  id: number;
  bookId: number;
  userId: number;
}

export interface IUserRating {
  id: number;
  bookId: number;
  userId: number;
  grade: number;
}

export interface IBookComments {
  id: number;
  bookId: number;
  userId: number;
  comment: string;
}

export interface IAnotherUser {
  avatar: string;
  fullname: string;
}

export type FilterType = {
  page?: string;
  limit?: string | number;
  search?: string;
  genre?: string;
  minPrice?: string | number;
  maxPrice?: string | number;
  sortBy?: string;
};
