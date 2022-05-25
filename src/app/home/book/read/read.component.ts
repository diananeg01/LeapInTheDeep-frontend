import {Component, Inject, Input, OnInit} from '@angular/core';
import {IBook, IReview} from "../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../commons/navigation.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  book: IBook;
  isDataReady: boolean;
  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private route: ActivatedRoute) {
    this.isDataReady = false;
  }

  async ngOnInit(): Promise<void> {
    this.book = (await this.navigationService.getBook(this.route.snapshot.params['name']))[0];
    this.isDataReady = true;
    console.log(this.book);
  }

  // public addReview(review: IReview) {
  //   this.navigationService.addReview(this.book, review);
  // }

}
