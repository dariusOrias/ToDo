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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todoUrl = 'app/todoArray';
    }
    TodoService.prototype.getTodo = function () {
        return this.http.get(this.todoUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.getTodoById = function (id) {
        return this.getTodo().then(function (todoArray) { return todoArray.filter(function (todo) { return todo.id === id; })[0]; });
    };
    // Add new Todo
    TodoService.prototype.post = function (todo) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.todoUrl, JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //update existing todo
    TodoService.prototype.put = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'applcation/json');
        var url = this.todoUrl + "/" + todo.id;
        return this.http
            .put(url, JSON.stringify(todo), { headers: headers })
            .toPromise()
            .then(function () { return todo; })
            .catch(this.handleError);
    };
    //delete a todo
    TodoService.prototype.delete = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'applcation/json');
        var url = this.todoUrl + "/" + todo.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    //save the current todo
    TodoService.prototype.save = function (todo) {
        if (todo.id) {
            return this.put(todo);
        }
        return this.post(todo);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map