import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { ITodo } from './todo.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  mainTitle: string = 'Todo';
  inputTitle: string;
  public todos: ITodo[];

  constructor(private service: TodoService) {
    // this.service.todo;
  }

  ngOnInit(): void {
    //Services
    this.service.getAll().subscribe(
      (data) => {
        this.todos = data;
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
    this.service.toggleTodo(uTodo).subscribe();
  }

  // log(data) {
  //   console.log(data);
  // }
}
