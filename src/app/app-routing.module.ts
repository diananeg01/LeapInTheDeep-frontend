import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./log-in-register/log-in/log-in.component";
import {RegisterComponent} from "./log-in-register/register/register.component";
import {UserHomeComponent} from "./home/user-home/user-home.component";
import {ReadComponent} from "./home/book/read/read.component";
import {WriteComponent} from "./home/book/write/write.component";
import {DraftComponent} from "./home/user-home/tabs/draft/draft.component";

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {
    path: 'log-in', component: LogInComponent
  },{
    path: 'register', component: RegisterComponent
  },{
    path: 'user-home/:username', component: UserHomeComponent
  },{
    path: 'read/:name', component: ReadComponent
  },{
    path: 'edit/:name', component: DraftComponent
  },{
    path: 'write', component: WriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
