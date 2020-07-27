import { Component } from '@angular/core';
import { Observable, interval, from, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-examples',
  template: ``,
  styles: [],
})
export class ExamplesComponent {
  constructor() {
    //2sec
    // Helps us to manage a sequence of items that
    // arrive asynchronously over time.
    //this.aboutObervables();
    //from, map, filter, pipe
    const source = from([1, 2, 3, 4, 5]);
    const result = source.pipe(
      map((d) => d * 3),
      filter((d) => d % 2 === 0)
    );
    result.subscribe((d) => console.log(d));
  }

  private aboutObervables() {
    const asyncData = interval(2000) as Observable<any>;

    asyncData.subscribe((data) => console.log(data));
  }
}
