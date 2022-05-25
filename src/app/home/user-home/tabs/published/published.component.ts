import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
  books!: Array<IBook>;
  @Input()
  user!: IUser;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.books = await this.navigationService.getPublished(this.user);
  }

  onWrite() {
    //this.router.navigate(['/write']);
  }
}
