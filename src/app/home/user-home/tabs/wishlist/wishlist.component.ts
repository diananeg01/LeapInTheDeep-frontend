import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../../users.model";
import {Observable} from "rxjs";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  books?: Array<IBook>;
  @Input()
  user!: IUser;

  @Output()
  toRead!: IBook;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.books = await this.navigationService.getWishlist(this.user);
  }

  onRead(book: IBook){
    //this.router.navigate(['/read', book.name]);
  }
}
