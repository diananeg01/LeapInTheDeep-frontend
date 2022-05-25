import {Component, Input, OnInit} from '@angular/core';
import {IUser, UserType} from "../../../users.model";
import {NavigationService} from "../../../commons/navigation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input()
  user: IUser;
  tab: number;

  userType = UserType;

  constructor() {
    this.tab = 1;
  }

  public selectTab(tab: number): void{
    this.tab = tab;
  }

  public isTabSelected(tab: number): boolean{
    return this.tab===tab;
  }

  ngOnInit(): void {
  }

}
