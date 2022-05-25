export enum UserType{
  WRITER = "WRITER",
  READER = "READER",
  ADMIN = "ADMIN"
}

export interface IReview{
  id?: number;
  stars?: number;
  body?: string;
  author?: string;
}

export interface IBook{
  bookId?: number;
  name?: string;
  author?: string;
  content?: string;
  reviews: Array<IReview>;
}

export interface IUser{
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  userType?: UserType;
  books: Array<IBook>;
  read: Array<IBook>;
  wishlist: Array<IBook>;
  favourites: Array<IBook>;
}

export interface IAdmin{
  id?: number;
  adminCode?: string;
  password?: string;
}
