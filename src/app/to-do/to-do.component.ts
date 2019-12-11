import {Component, OnInit} from '@angular/core';
import {Todo, Todos} from "../todo.model";
import {AppState} from "../redux/app.state";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AddTodo} from "../redux/todos.action";
import {getTodos} from "../redux/todos.selectors";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todoTitle: string;
  todos$: Todo[];
  public todoState: Observable<Todos>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todoState = this.store.select('todoPage');
    this.store.pipe(select(getTodos)).subscribe(t => {
      this.todos$ = t;
    })
  }

  addTasks(): void {
    if (this.todoTitle.trim() && !this.todos$.some( t=> t.task == this.todoTitle)) {
      this.store.dispatch(new AddTodo(new Todo(this.todoTitle, false)));
    }
    this.todoTitle = '';
  }

}
