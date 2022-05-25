import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input()
  user: IUser;
  books: Array<IBook> = [];
  //cbooks!: Array<IBook>;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
    this.navigationService.getAllBooks().then(data => data.forEach(book => this.books.push(book)));
    this.navigationService.getWishlist(this.user).then(wishlist => wishlist.forEach(w => this.user.wishlist.push(w)));
  }

  ngOnInit(){
    console.log(this.books);
  }

  onRead(book: IBook){
    //this.router.navigate(['/read', book.name]);
  }

  onWishlist(book: IBook){
    this.user.wishlist.push(book);
    this.navigationService.addWishlist(this.user, book);
    //this.navigationService.getWishlist(this.user).then(wishlist => this.user.wishlist = wishlist);

  }

  onFavourites(book: IBook){
    this.user.favourites.push(book);
    this.navigationService.addFavourites(this.user, book);
  }

}
