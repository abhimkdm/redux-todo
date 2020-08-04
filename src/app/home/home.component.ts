import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: string;
  constructor(
    private actRoute: ActivatedRoute,
    private socialAuth: SocialAuthService
  ) {
    //Todo : Check whether logged in
    console.log(actRoute);
    console.log(actRoute.snapshot.params['name']); //undefine
    console.log(actRoute.snapshot.paramMap.get('name')); //null
    this.user = actRoute.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {}

  LogOut() {
    this.socialAuth.signOut();
  }
}
