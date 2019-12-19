import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {ChangeStatus, DeleteTodo} from "../store/todos.action";
import {IAppState} from "../shared/interfaces";
import {TO_DOS_STATUS} from "../shared/enum";
import {Todo} from "../shared/helpers";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() todo: Todo;
  @Input() selectedType: TO_DOS_STATUS;

  constructor(private store: Store<IAppState>) {
  }

  onDelete(): void {
    this.store.dispatch(new DeleteTodo(this.todo));
  }

  changeStatus(): void {
    this.store.dispatch(new ChangeStatus(this.todo));
  }
}
