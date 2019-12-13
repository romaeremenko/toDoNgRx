import {Component, Input} from '@angular/core';
import {Todo} from "../todo.model";
import {Store} from "@ngrx/store";
import {ChangeStatus, DeleteTodo} from "../redux/todos.action";
import {AppState, TO_DOS_STATUS} from "../share/global-variables";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() todo: Todo;
  @Input() selectedType: TO_DOS_STATUS;

  constructor(private store: Store<AppState>) {
  }

  onDelete(): void {
    this.store.dispatch(new DeleteTodo(this.todo));
  }

  changeStatus(): void {
    this.store.dispatch(new ChangeStatus(this.todo));
  }
}
