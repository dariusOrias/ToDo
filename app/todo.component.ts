import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todo',
  styleUrls: ['css/todo.component.css'],
  templateUrl: 'views/todo.component.html',
  directives: [TodoDetailComponent]
})

export class TodoComponent implements OnInit {
    addingTodo: boolean;
    selectedTodo: Todo;
    todoArray: Todo[];
    error: any;
    onSelect (todo: Todo) { this.selectedTodo = todo; }

    constructor (
      private router: Router,
      private todoService: TodoService
    ) { }

    getTodo () {
        this.todoService.getTodo().then(todoArray => this.todoArray = todoArray);
    }

    gotoDetail () {
      let link = ['TodoDetail', { id: this.selectedTodo.id}];
      this.router.navigate(link);
    }

    ngOnInit () {
        this.getTodo();
    }

    addTodo() {
      this.addingTodo = true;
      this.selectedTodo = null;
    }

    close(savedTodo: Todo) {
      this.addingTodo = false;
      if (savedTodo) { this.getTodo(); }
    }

    delete(todo: Todo, event: any) {
      event.stopPropagation();
      this.todoService
          .delete(todo)
          .then(res => {
            this.todoArray = this.todoArray.filter(h => h !== todo);
            if (this.selectedTodo === todo) { this.selectedTodo = null; }
          })
          .catch(error => this.error = error);
    }
}