import {Component, Inject} from '@angular/core';
import {NAVIGATION_SERVICE, NavigationService} from "./commons/navigation.service";
import {UserType} from "./users.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bwa-front';

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: NavigationService) {
  }

  private roles: UserType[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showWriterBoard = false;
  showReaderBoard = false;
  username?: string;

  ngOnInit(): void {
    //this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      //const user = this.tokenStorageService.getUser();
      const user = JSON.parse(localStorage.getItem('user')!);
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes(UserType.ADMIN);
      this.showWriterBoard = this.roles.includes(UserType.WRITER);
      this.showReaderBoard = this.roles.includes(UserType.READER);

      this.username = user.username;
    }
  }

  logout(): void {
    //this.tokenStorageService.signOut();
    window.location.reload();
  }
}
