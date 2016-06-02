import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { TodoService }     from './todo.service';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail.component';
@Component({
  selector: 'my-app',
  styleUrls: ['css/app.component.css'],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Todo']">Todo</a>
    </nav>
    <div class="invi"> </div>
    <router-outlet class="content"></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})
@RouteConfig([
  {
    path: '/todo',
    name: 'Todo',
    component: TodoComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'TodoDetail',
    component: TodoDetailComponent
  }
])
export class AppComponent {
  title = 'Todo List';
}
