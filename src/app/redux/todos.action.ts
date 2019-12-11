import {Action} from "@ngrx/store";
import {Todo} from "../todo.model";

export namespace TODO_ACTION {
  export  const ADD_TODO = 'ADD_TODO';
  export  const DELETE_TODO = 'DELETE_TODO';
  export const CHANGE_STATUS = 'CHANGE_STATUS';
}

export class AddTodo implements Action {
  readonly type = TODO_ACTION.ADD_TODO;

  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = TODO_ACTION.DELETE_TODO;

  constructor(public payload: Todo) {}
}

export class ChangeStatus implements Action {
  readonly type = TODO_ACTION.CHANGE_STATUS;

  constructor(public payload: Todo) {}
}

export type TodosActions = AddTodo | DeleteTodo | ChangeStatus;
