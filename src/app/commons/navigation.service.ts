import {Injectable, InjectionToken, Provider} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {HttpClient, } from "@angular/common/http";
import {IBook, IReview, IUser, UserType} from "../users.model";
import {Router} from "@angular/router";

const BKE_API = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class NavigationService{
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any>{
    return this.http.get(BKE_API + `user/${id}`);
  }

  getUsers(): Observable<any>{
    return this.http.get(BKE_API + 'users');
  }

  getBook(name: string | null): Promise<any>{
    return firstValueFrom(this.http.get(BKE_API + `book/name/${name}`));
  }

  async getWishlist(user:IUser): Promise<Array<IBook>>{
    return firstValueFrom(this.http.get<Array<IBook>>(BKE_API + `user/${user.username}/wishlist`));
  }

  async getFavourites(user:IUser): Promise<Array<IBook>>{
    return firstValueFrom(this.http.get<Array<IBook>>(BKE_API + `user/${user.username}/favourites`));
  }

  async getAllBooks(): Promise<Array<IBook>>{
    return firstValueFrom(this.http.get<Array<IBook>>(BKE_API + 'book/books'));
  }

  async getDrafts(user: IUser) {
    return firstValueFrom(this.http.get<Array<IBook>>(BKE_API + 'drafts')); // TODO
  }

  async getPublished(user: IUser) {
    return firstValueFrom(this.http.get<Array<IBook>>(BKE_API + `user/${user.username}/written`));
  }

  async addWishlist(user: IUser, book: IBook){
    console.log(book);
    return firstValueFrom(this.http.post(BKE_API + `user/${user.username}/add-wishlist`,
      {...book}));
  }

  async addFavourites(user: IUser, book: IBook){
    console.log(book);
    return firstValueFrom(this.http.post(
      BKE_API + `user/${user.username}/add-favourites`,
      {...book}));
  }

  async addWritten(user: IUser, book: IBook){
    return firstValueFrom(this.http.post(
      BKE_API + `user/${user.username}/newBook`,
      {...book}));
  }

  async addRead(user: IUser, book: IBook){
    return firstValueFrom(this.http.post(
      BKE_API + `user/${user.username}/add-read`,
      {...book}));
  }

  async getReviews(book: IBook){
    return firstValueFrom(this.http.get<Array<IReview>>(BKE_API + `book/${book.bookId}/reviews`));
  }

  addReview(book: IBook | undefined, review: IReview): Observable<IReview> {
    return this.http.post<IReview>(BKE_API + `book/${book?.bookId}/newReview`, {...review});
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(BKE_API + `log-in?username=${username}&password=${password}`, {});
  }

  register(username: string, email: string, password: string, userType: UserType): Observable<any> {
    return this.http.post(BKE_API + 'register', {
      username,
      email,
      password,
      userType
    });
  }
}

export const NAVIGATION_SERVICE: InjectionToken<NavigationService> = new InjectionToken('NAVIGATION_SERVICE');

export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
};
