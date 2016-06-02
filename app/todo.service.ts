import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable () 

export class TodoService {

    private todoUrl = 'app/todoArray';

    constructor(private http: Http) {}

    getTodo (): Promise<Todo[]> {
        return this.http.get(this.todoUrl)
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
    }

    getTodoById(id: number) {
        return this.getTodo().then(
            todoArray => todoArray.filter(todo => todo.id === id)[0]
        );
    }

    // Add new Todo
    private post(todo: Todo): Promise<Todo> {
        let headers = new Headers({
            'Content-Type' : 'application/json'
        });

        return this.http
                    .post(this.todoUrl, JSON.stringify(todo), {headers: headers})
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
    }

    //update existing todo
    private put(todo: Todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'applcation/json');

        let url = `${this.todoUrl}/${todo.id}`;

        return this.http
                    .put(url, JSON.stringify(todo), {headers: headers})
                    .toPromise()
                    .then(() => todo)
                    .catch(this.handleError);
    }

    //delete a todo
    delete(todo: Todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'applcation/json');

        let url = `${this.todoUrl}/${todo.id}`;

        return this.http
                    .delete(url, headers)
                    .toPromise()
                    .catch(this.handleError);
    }

    //save the current todo
    save(todo: Todo): Promise<Todo> {
        if (todo.id) {
            return this.put(todo);
        }

        return this.post(todo);
    }

    private handleError(error: any) {
        console.error ('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}