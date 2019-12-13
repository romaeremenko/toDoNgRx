import {Todo, Todos} from "../todo.model";
import {INITIAL_STATE, TO_DOS_STATUS, TODO_ACTION, TodosActions} from "../share/global-variables";

export function todosReducer(state: Todos = INITIAL_STATE, action: TodosActions) {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      };
    case TODO_ACTION.DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, action.payload)
      };
    case TODO_ACTION.CHANGE_STATUS:
      return {
        ...state,
        todos: changeStatus(state.todos, action.payload)
      };
    case TODO_ACTION.FILTER_TODOS:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state
  }
}

function addTodo(todoList, newTodo: Todo) {
  if (newTodo.task.trim() && !todoList.some(todoItem => todoItem.task == newTodo.task)) {
    return [...todoList, newTodo];
  } else {
    return todoList;
  }
}

function deleteTodo(todoList, todoForDelete) {
  todoList = todoList.filter((todoItem: Todo) => todoItem.task !== todoForDelete.task);
  return [...todoList];
}

function changeStatus(todoList, todoForChangeStatus) {
  todoList = todoList.map((todoItem: Todo) => {
    if (todoItem.task === todoForChangeStatus.task) {
      todoItem = {
        ...todoItem,
        status: todoItem.status
          ? TO_DOS_STATUS.DONE
          : TO_DOS_STATUS.INPROGRESS
      };
    }

    return todoItem;
  });
  return [...todoList];
}
