"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var todo_service_1 = require('./todo.service');
var todo_component_1 = require('./todo.component');
var todo_detail_component_1 = require('./todo-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Todo List';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['css/app.component.css'],
            template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Todo']\">Todo</a>\n    </nav>\n    <div class=\"invi\"> </div>\n    <router-outlet class=\"content\"></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                todo_service_1.TodoService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/todo',
                name: 'Todo',
                component: todo_component_1.TodoComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'TodoDetail',
                component: todo_detail_component_1.TodoDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map