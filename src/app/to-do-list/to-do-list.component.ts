import {Component, Input} from '@angular/core';
import {Todo} from "../todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {CheckboxModule} from 'primeng/checkbox';
import {ChangeStatus, DeleteTodo} from "../redux/todos.action";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() todo: Todo;

  constructor(private store: Store<AppState>) { }

  onDelete(){
    this.store.dispatch(new DeleteTodo(this.todo));
  }

  changeStatus(){
    this.store.dispatch(new ChangeStatus(this.todo));
  }
}
