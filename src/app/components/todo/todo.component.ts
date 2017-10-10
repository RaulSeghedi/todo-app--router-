import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: string[];

  constructor() {
  }

  ngOnInit() {
    this.todos = ['programming', 'snowboarding'];
  }

  addTodo(todo) {
    if (todo !== '') {
      this.todos.push(todo);
    }
  }

  deleteTodo(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] == todo) {
        this.todos.splice(i, 1);
      }
    }
  }
}

