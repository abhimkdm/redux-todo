import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
      <div class="row">
        <div class="col"><app-todo> </app-todo></div>
        <div class="col"><app-dashboard></app-dashboard></div>
      </div>
    </h1>
    <app-examples></app-examples> `,
  styles: [],
})
export class AppComponent {}
