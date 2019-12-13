import {Todo, Todos} from "../todo.model";
import {AddTodo, ChangeStatus, DeleteTodo, FilterTodos} from "../redux/todos.action";

export enum TO_DOS_STATUS {
  INPROGRESS,
  DONE,
  ALL,
}

export const TASKS = [
  new Todo('Create App', TO_DOS_STATUS.INPROGRESS),
  new Todo('Learn NgRx', TO_DOS_STATUS.INPROGRESS),
];

export const INITIAL_STATE: Todos = {
  todos: [...TASKS],
  filtered: [...TASKS],
  filter: TO_DOS_STATUS.ALL
};

export const FILTERED_OPTIONS = [
  {label: 'All', value: TO_DOS_STATUS.ALL},
  {label: 'Done', value: TO_DOS_STATUS.DONE},
  {label: 'InProgress', value: TO_DOS_STATUS.INPROGRESS}
];

export namespace TODO_ACTION {
  export const ADD_TODO = 'ADD_TODO';
  export const DELETE_TODO = 'DELETE_TODO';
  export const CHANGE_STATUS = 'CHANGE_STATUS';
  export const FILTER_TODOS = 'FILTER_TODOS';
}

export interface AppState {
  todoPage: {
    todos: Todo[],
    filtered: Todo[],
    filter: TO_DOS_STATUS
  }
}

export type TodosActions = AddTodo | DeleteTodo | ChangeStatus | FilterTodos;
