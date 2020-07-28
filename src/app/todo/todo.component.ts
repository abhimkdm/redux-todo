import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { ITodo } from './todo.interface';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  mainTitle: string = 'Todo';
  inputTitle: string;
  public todos: ITodo[];
  public subscribe: Subscription;

  constructor(private service: TodoService) {
    // this.service.todo;
  }

  ngOnInit(): void {
    //Services
    this.service.getAll().subscribe(
      (data) => {
        this.todos = data;
        this.service.bcast.next(data);
      },
      (error) => {
        console.log('Couldnt load the todos');
      }
    );
  }

  addTodo(todoForm: NgForm) {
    if (!this.inputTitle) return;
    var todo = {
      id: 0,
      title: this.inputTitle,
      isCompleted: false,
    } as ITodo;

    this.service.saveTodo(todo).subscribe(
      (data) => {
        this.todos.push(data);
        this.service.bcast.next(this.todos);
      },
      (error) => {}
    );

    todoForm.form.reset();
    // var todo = {
    //   id: this.todos.length + 1,
    //   title: todoVal.value,
    //   isCompleted: false,
    // };
    // this.todos.push(todo);
  }

  toggleTodo(id) {
    //forloop //foreach //map //ES 6 - Arrow Function
    this.todos.map((todo) => {
      if (todo.id == id) todo.isCompleted = !todo.isCompleted;
    });

    let uTodo = this.todos.find((d) => d.id == id) as ITodo;
    this.service.toggleTodo(uTodo).subscribe((d) => {
      this.service.bcast.next(this.todos);
    });
  }

  ngOnDestroy(): void {
    //When move C1 to C2. Helps for memmory leak.
    this.subscribe?.unsubscribe();
  }

  // log(data) {
  //   console.log(data);
  // }
}
