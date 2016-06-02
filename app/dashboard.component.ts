import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['css/dashboard.component.css'],
  templateUrl: 'views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  todoArray: Todo[] = [];
  constructor(
    private router: Router,
    private todoService: TodoService
  ) { }
  ngOnInit() {
    this.todoService.getTodo().then(todoArray => this.todoArray = todoArray.splice(0,4));
  }
  gotoDetail(todo: Todo) { 
    let link = ['TodoDetail', { id: todo.id}];
    this.router.navigate(link);
  }
}
