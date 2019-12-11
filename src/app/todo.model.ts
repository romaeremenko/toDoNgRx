export class Todo{
  constructor(public task: string,
              public status: boolean) {
  }
}

export interface Todos {
  todos: Todo[]
}
