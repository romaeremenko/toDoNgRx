import {Action} from "@ngrx/store";
import {IFilterTodos} from "../shared/interfaces";
import {Todo} from "../shared/helpers";

export namespace TODO_ACTION {
  export const ADD_TODO = 'ADD_TODO';
  export const DELETE_TODO = 'DELETE_TODO';
  export const CHANGE_STATUS = 'CHANGE_STATUS';
  export const FILTER_TODOS = 'FILTER_TODOS';
  export const SHOW_SPINNER = 'SHOW LOADING SPINNER';
  export const HIDE_SPINNER = 'HIDE LOADING SPINNER';
  export const SET_MESSAGES_HANDLER = 'SET_MESSAGES_HANDLER';
  export const CLEAR_MESSAGES_HANDLER = 'CLEAR_MESSAGES_HANDLER';
}

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

  constructor(public payload?: IFilterTodos) {
  }
}

export class ShowSpinner implements Action {
  readonly type = TODO_ACTION.SHOW_SPINNER;

  constructor(public payload: boolean) {}
}

export class HideSpinner implements Action {
  readonly type = TODO_ACTION.HIDE_SPINNER;

  constructor(public payload: boolean) {}
}

export class SetMessagesHandler implements Action {
  readonly type = TODO_ACTION.SET_MESSAGES_HANDLER;

  constructor(public payload: any) {}
}

export class ClearMessagesHandler implements Action {
  readonly type = TODO_ACTION.CLEAR_MESSAGES_HANDLER;

  constructor(public payload?: any) {}
}

export type TodosActions = AddTodo | DeleteTodo | ChangeStatus | FilterTodos | HideSpinner | ShowSpinner | SetMessagesHandler | ClearMessagesHandler;
