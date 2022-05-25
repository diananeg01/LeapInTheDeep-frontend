import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IReview, IUser} from "../../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  user: IUser;
  book: IBook;
  @Input()
  reviews: Array<IReview>;
  newReview: IReview;

  @Output()
  private addReview = new EventEmitter<IReview>();

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.book = JSON.parse(localStorage.getItem('book')!);
    this.newReview = {
      author: this.user.username
    };
  }

  async ngOnInit() {
    this.reviews = await this.navigationService.getReviews(this.book);
  }

  public onSubmit() {
    this.navigationService.addReview(this.book, this.newReview);
    this.addReview.emit(this.newReview);
    this.reviews.push(this.newReview);
    this.newReview = {};
  }

}
