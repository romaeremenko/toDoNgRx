import {TO_DOS_STATUS} from "./redux/todos.reducer";

export class Todo{
  constructor(public task: string,
              public status: TO_DOS_STATUS) {
  }
}

export interface Todos {
  todos: Todo[],
  filtered: Todo[],
  filter: TO_DOS_STATUS
}
