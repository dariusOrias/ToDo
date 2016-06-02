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
var todo_1 = require('./todo');
var todo_service_1 = require('./todo.service');
var TodoDetailComponent = (function () {
    function TodoDetailComponent(todoService, routeParams) {
        this.todoService = todoService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.todoService.getTodoById(id)
                .then(function (todo) { return _this.todo = todo; });
        }
        else {
            this.navigated = false;
            this.todo = new todo_1.Todo();
        }
    };
    TodoDetailComponent.prototype.save = function () {
        var _this = this;
        this.todoService
            .save(this.todo)
            .then(function (todo) {
            _this.todo = todo;
            _this.goBack(todo);
        })
            .catch(function (error) { return _this.error = error; });
    };
    TodoDetailComponent.prototype.goBack = function (savedTodo) {
        if (savedTodo === void 0) { savedTodo = null; }
        this.close.emit(savedTodo);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoDetailComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoDetailComponent.prototype, "close", void 0);
    TodoDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-todo-detail',
            styleUrls: ['css/todo-detail.component.css'],
            templateUrl: 'views/todo-detail.component.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_deprecated_1.RouteParams])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());
exports.TodoDetailComponent = TodoDetailComponent;
//# sourceMappingURL=todo-detail.component.js.map