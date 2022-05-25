import {Component, Inject, OnInit} from '@angular/core';
import {IUser, UserType} from "../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../commons/navigation.service";

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user: IUser;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService) {
    this.user = {
      id: 0,
      username: '',
      password: '',
      email: '',
      userType: UserType.READER,
      books: [],
      read: [],
      wishlist: [],
      favourites: [],
    };
  }

  async ngOnInit(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.user.wishlist = await this.navigationService.getWishlist(this.user);
    this.user.favourites = await this.navigationService.getFavourites(this.user);
  }

}
