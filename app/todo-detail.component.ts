import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todo-detail',
  styleUrls: ['css/todo-detail.component.css'],
  templateUrl: 'views/todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit{
  @Input() todo: Todo;
  @Output() close = new EventEmitter();
  navigated: boolean;
  error: any;

  constructor (
    private todoService: TodoService,
    private routeParams: RouteParams
  ) {

  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.todoService.getTodoById(id)
          .then(todo => this.todo = todo);
    } else {
      this.navigated = false;
      this.todo = new Todo();
    }
  }

  save() {
    this.todoService
        .save(this.todo)
        .then(todo => {
          this.todo = todo;
          this.goBack(todo);
        })
        .catch(error => this.error = error);
  }

  goBack(savedTodo: Todo = null) {
    this.close.emit(savedTodo);
    if (this.navigated) { window.history.back(); }
  }
}
