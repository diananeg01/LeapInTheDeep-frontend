import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in-register/log-in/log-in.component';
import { RegisterComponent } from './log-in-register/register/register.component';
import {NavigationServiceProvider} from "./commons/navigation.service";
import {FormsModule} from "@angular/forms";
import { UserHomeComponent } from './home/user-home/user-home.component';
import { WishlistComponent } from './home/user-home/tabs/wishlist/wishlist.component';
import { FavouriteComponent } from './home/user-home/tabs/favourite/favourite.component';
import { TabsComponent } from './home/user-home/tabs/tabs.component';
import { BooksComponent } from './home/user-home/tabs/books/books.component';
import { DraftComponent } from './home/user-home/tabs/draft/draft.component';
import { PublishedComponent } from './home/user-home/tabs/published/published.component';
import { ReadComponent } from './home/book/read/read.component';
import { WriteComponent } from './home/book/write/write.component';
import { ReviewComponent } from './home/book/read/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    UserHomeComponent,
    WishlistComponent,
    FavouriteComponent,
    TabsComponent,
    BooksComponent,
    DraftComponent,
    PublishedComponent,
    ReadComponent,
    WriteComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [NavigationServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
