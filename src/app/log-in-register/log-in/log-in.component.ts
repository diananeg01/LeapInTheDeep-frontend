import {Component, Input, OnInit} from '@angular/core';
import {UserType} from "../../users.model";
import {NavigationService} from "../../commons/navigation.service";
import {Router} from "@angular/router";

// TODO: https://www.bootdey.com/snippets/view/blue-login

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Input()
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  roles: UserType[] = [];

  constructor(private navigationService: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const username = this.username;
    const password = this.password;
    console.log('asd');
    this.navigationService.login(username, password).subscribe({
      next: user => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl(`/user-home/${username}`);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
