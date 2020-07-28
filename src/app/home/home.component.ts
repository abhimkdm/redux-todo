import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: string;
  constructor(private actRoute: ActivatedRoute) {
    //Todo : Check whether logged in
    console.log(actRoute);
    console.log(actRoute.snapshot.params['name']); //undefine
    console.log(actRoute.snapshot.paramMap.get('name')); //null
    this.user = actRoute.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {}
}
