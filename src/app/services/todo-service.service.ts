import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ITodo } from '../todo/todo.interface';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Injectable()
export class TodoService {
  public todo: string = 'From Service';
  url: string = 'http://localhost:3000/todos';
  public bcast = new Subject<ITodo[]>(); // Holding multple Obervable
  //// Pass the data
  //Subject
  //Local shared
  //Local objects
  // rounting query - id
  // Redux -
  //@input & @ouput - P - C

  //Making Http calls.
  constructor(private http: HttpClient) {}

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url);
  }

  saveTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.url, todo);
  }

  toggleTodo(todo: ITodo) {
    var headers = new HttpHeaders();
    //headers = headers.set("")
    var params = new HttpParams();
    //params= params.set()
    return this.http.put(this.url + '/' + todo.id, todo);
  }
}

//Register service in 3 ways

//In Angular Module

//In Service Itself ProviderIn : root
//-- Shared module
//-- AM - M1 - S1 - PI, M2- S2 -PI - Single instance S1 , S2
// M3 - S3 - Module - two 0r more instance S3

//In Seperate Component
// Todo - S - Single instance
// newcomp - S - Single instance
