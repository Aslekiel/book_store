export interface IBookType {
  books: IBook[];
  serviceInfo: ServiceInfoType;
}

export interface IUserType {
  user: IUser | null;
}

export interface IPropsType {
  fullname?: string;
  email: string;
  password?: string;
}

export interface IUser {
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

export type FilterType = {
  page?: string;
  limit?: string | number;
  search?: string;
  genre?: string;
  minPrice?: string | number;
  maxPrice?: string | number;
  sortBy?: string;
};

export type RatingOptionsType = {
  bookId: number;
  grade: number;
};

export type ServiceInfoType = {
  page: number;
  limit: number;
  prevPage: number | null;
  nextPage: number | null;
  totalPages: number;
  totalBooks: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type CommentatorType = {
  id: number;
  fullname: string;
  avatar: string;
};

export type CommentatorInfoType = {
  avatar: string;
  fullname: string;
};
