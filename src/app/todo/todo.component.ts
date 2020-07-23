import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  mainTitle: string = 'Todo';
  inputTitle: string;
  public todos = [];
  constructor() {}

  ngOnInit(): void {}

  addTodo(todoVal) {
    if (!todoVal.value) return;

    var todo = {
      id: this.todos.length + 1,
      title: todoVal.value,
      isCompleted: false,
    };
    this.todos.push(todo);
    todoVal.value = '';
  }

  toggleTodo(id) {
    //forloop
    //foreach
    //map
    //ES 6 Arrow Function
    this.todos.map((todo) => {
      if (todo.id == id) todo.isCompleted = !todo.isCompleted;
    });
  }

  log(data) {
    console.log(data);
  }
}
