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
var todo_detail_component_1 = require('./todo-detail.component');
var todo_service_1 = require('./todo.service');
var TodoComponent = (function () {
    function TodoComponent(router, todoService) {
        this.router = router;
        this.todoService = todoService;
    }
    TodoComponent.prototype.onSelect = function (todo) { this.selectedTodo = todo; };
    TodoComponent.prototype.getTodo = function () {
        var _this = this;
        this.todoService.getTodo().then(function (todoArray) { return _this.todoArray = todoArray; });
    };
    TodoComponent.prototype.gotoDetail = function () {
        var link = ['TodoDetail', { id: this.selectedTodo.id }];
        this.router.navigate(link);
    };
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodo();
    };
    TodoComponent.prototype.addTodo = function () {
        this.addingTodo = true;
        this.selectedTodo = null;
    };
    TodoComponent.prototype.close = function (savedTodo) {
        this.addingTodo = false;
        if (savedTodo) {
            this.getTodo();
        }
    };
    TodoComponent.prototype.delete = function (todo, event) {
        var _this = this;
        event.stopPropagation();
        this.todoService
            .delete(todo)
            .then(function (res) {
            _this.todoArray = _this.todoArray.filter(function (h) { return h !== todo; });
            if (_this.selectedTodo === todo) {
                _this.selectedTodo = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'my-todo',
            styleUrls: ['css/todo.component.css'],
            templateUrl: 'views/todo.component.html',
            directives: [todo_detail_component_1.TodoDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map