import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  user: IUser;
  @Input()
  newBook: IBook;

  @Output()
  private addBook = new EventEmitter<IBook>();

  constructor(
    @Inject(NAVIGATION_SERVICE) private navigationService: NavigationService,
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.newBook = {
      author: this.user.username,
      reviews: []
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addBook.emit(this.newBook);
    this.user.books.push(this.newBook);
    this.newBook = {
      author: this.user.username,
      reviews: []
    };
  }
}
