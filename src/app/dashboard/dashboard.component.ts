import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { ITodo } from '../todo/todo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  tTodoCount: any;
  cTodoCount: any;
  pTodoCount: any;
  lastUpdateOn: Date;
  public subscribe: Subscription;

  constructor(private service: TodoService) {
    this.service.bcast.subscribe((data) => {
      //Todo
      this.tTodoCount = data.length;
      this.cTodoCount = data.filter((d) => d.isCompleted == true).length;
      this.pTodoCount = data.filter((d) => d.isCompleted == false).length;
    });
    this.lastUpdateOn = new Date();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //When move C1 to C2. Helps for memmory leak.
    this.subscribe.unsubscribe();
  }
}
