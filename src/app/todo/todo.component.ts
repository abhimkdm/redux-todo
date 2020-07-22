import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  mainTitle: string = 'Todo';
  public todos = [];
  constructor() {}

  ngOnInit(): void {}

  addTodo(todoVal) {
    if (!todoVal.value) return;

    var todo = { id: this.todos.length + 1, title: todoVal.value };
    this.todos.push(todo);
    todoVal.value = '';
  }
}
