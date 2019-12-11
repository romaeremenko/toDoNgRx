import {Todo} from "../todo.model";

export interface AppState {
  todoPage: {
    todos: Todo[]
  }
}
