import {Action} from "@ngrx/store";
import {Todo} from "../todo.model";
import {TO_DOS_STATUS, TODO_ACTION} from "../share/global-variables";

export class AddTodo implements Action {
  readonly type = TODO_ACTION.ADD_TODO;

  constructor(public payload: Todo) {
  }
}

export class DeleteTodo implements Action {
  readonly type = TODO_ACTION.DELETE_TODO;

  constructor(public payload: Todo) {
  }
}

export class ChangeStatus implements Action {
  readonly type = TODO_ACTION.CHANGE_STATUS;

  constructor(public payload: Todo) {
  }
}

export class FilterTodos implements Action {
  readonly type = TODO_ACTION.FILTER_TODOS;

  constructor(public payload?: TO_DOS_STATUS) {
  }
}
