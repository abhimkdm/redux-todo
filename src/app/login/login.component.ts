import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UserModel;
  email: string;
  password: string;
  constructor(private route: Router) {
    this.user = new UserModel();
    //Todo: Push this to db.json get from there.
    this.user = {
      id: 1,
      name: 'Abhishek',
      email: 'abhi@gmail.com',
      password: 'kadam',
    };
  }

  login() {
    //Todo: move home comp
    if (this.user.email == this.email && this.user.password == this.password) {
      this.route.navigateByUrl('/home/' + this.user.name);
    }
  }

  ngOnInit(): void {}
}
