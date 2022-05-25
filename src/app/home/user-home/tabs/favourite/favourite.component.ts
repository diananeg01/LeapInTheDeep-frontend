import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../../users.model";
import {Observable} from "rxjs";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  books?: Array<IBook>;
  @Input()
  user!: IUser;

  @Output()
  toRead!: IBook;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.books = await this.navigationService.getFavourites(this.user);
  }

  onRead(book: IBook){
    //this.router.navigate(['/read', book.name]);
  }
}
