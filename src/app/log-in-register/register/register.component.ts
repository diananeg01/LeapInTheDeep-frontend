import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from "../../commons/navigation.service";
import {UserType} from "../../users.model";
import {Router} from "@angular/router";

// TODO: https://www.bootdey.com/snippets/view/blue-sign-up

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  username: string = '';
  @Input()
  password: string = '';
  @Input()
  email: string = '';
  @Input()
  userType: UserType = UserType.READER;

  errorMessage = '';

  constructor(private navigationService: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const username = this.username;
    const password = this.password;
    const email = this.email;
    const userType = this.userType;

    this.navigationService.register(username, email, password, userType).subscribe({
      next: user => {
        console.log(user);
        this.router.navigateByUrl(`/user-home/${username}`);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
