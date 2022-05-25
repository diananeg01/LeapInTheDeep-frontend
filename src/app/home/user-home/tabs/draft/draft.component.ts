import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {IBook, IUser} from "../../../../users.model";
import {NAVIGATION_SERVICE, NavigationService} from "../../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  @Input()
  user!: IUser;
  books: Array<IBook>;

  @Output()
  toEdit!: IBook;

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.books = await this.navigationService.getDrafts(this.user);
  }

  onEdit(){
    //this.router.navigateByUrl("/edit", this.toEdit.name);
  }
}
