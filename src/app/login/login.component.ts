import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UserModel;
  email: string;
  password: string;
  platform: any;
  constructor(private route: Router, private socialAuth: SocialAuthService) {
    this.user = new UserModel();
    //Todo: Push this to db.json get from there.
    this.user = {
      id: 1,
      name: 'Abhishek',
      email: 'abhi@gmail.com',
      password: 'kadam',
    };

    localStorage.removeItem('name');
    localStorage.removeItem('token');
  }

  login() {
    //Todo: move home comp
    if (this.user.email == this.email && this.user.password == this.password) {
      this.route.navigateByUrl('/home/' + this.user.name);
    }
  }

  loginGmail() {
    this.platform = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuth.signIn(this.platform).then((res) => {
      console.log(this.platform);
      console.log(res);
      localStorage.setItem('name', res.name);
      localStorage.setItem('token', res.idToken);
      this.route.navigateByUrl('/home/' + res.name);
    });
  }

  ngOnInit(): void {}
}
