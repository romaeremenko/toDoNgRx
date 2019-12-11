import {Todo, Todos} from "../todo.model";
import {TODO_ACTION, TodosActions} from "./todos.action";

const initialState: Todos = {
  todos: [
    new Todo('Create App',false),
    new Todo('Learn NgRx',false),
  ]
}

export function todosReducer(state: Todos = initialState, action: TodosActions){
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TODO_ACTION.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((t: Todo) => t.task !== action.payload.task)]
      };
    case TODO_ACTION.CHANGE_STATUS:
      return {
        ...state,
        todos: [...state.todos.map((t: Todo) => {
          if(t.task === action.payload.task){
            t =  {...t, status: !t.status};
          };
          return t;
        })]
      }
    default:
      return state
  }
}
