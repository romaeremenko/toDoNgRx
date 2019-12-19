import {ITodos} from "../shared/interfaces";
import {TO_DOS_STATUS} from "../shared/enum";
import {errorWrapper, INITIAL_STATE, successWrapper} from "../shared/consts";
import {TODO_ACTION, TodosActions} from "./todos.action";
import {Todo} from "../shared/helpers";

export function todosReducer(state: ITodos = INITIAL_STATE, action: TodosActions) {
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
    case TODO_ACTION.HIDE_SPINNER:
      return {
        ...state,
        loading: action.payload
      };
    case TODO_ACTION.SHOW_SPINNER:
      return {
        ...state,
        loading: action.payload
      };
    case TODO_ACTION.SET_MESSAGES_HANDLER:
      return {
        ...state,
        messagesHandler: setMessage(action.payload)
      };
    case TODO_ACTION.CLEAR_MESSAGES_HANDLER:
      return {
        ...state,
        messagesHandler: null
      };
    default:
      return state
  }
}

function addTodo(todoList: Todo[], newTodo: Todo) {
  return newTodo.task.trim() ? [...todoList, newTodo] : todoList
}

function deleteTodo(todoList: Todo[], todoForDelete: Todo) {
  todoList = todoList.filter((todoItem: Todo) => todoItem.uid !== todoForDelete.uid);
  return [...todoList];
}

function changeStatus(todoList: Todo[], todoForChangeStatus: Todo) {
  todoList = todoList.map((todoItem: Todo) => {
    if (todoItem.uid === todoForChangeStatus.uid) {
      return Object.assign({}, {
        ...todoItem,
        status: todoItem.status
          ? TO_DOS_STATUS.INPROGRESS
          : TO_DOS_STATUS.DONE
      });
    }

    return todoItem;
  });
  return [...todoList];
}

function setMessage({payload, type}) {
  if (type === TODO_ACTION.ADD_TODO) {
    return payload.task
      ? successWrapper(`Задание "${payload.task}" успешно добавлено`)
      : errorWrapper(`Пустая строка`);
  } else if (type === TODO_ACTION.CHANGE_STATUS) {
    return payload.task
      ? successWrapper(`Статус задания "${payload.task}" успешно изменён с ${payload.status ? '"Сделан"' : '"В процессе"'} на ${payload.status ? '"В процессе"' : '"Сделан"'}`)
      : errorWrapper('Внутренняя ошибка')
  } else if (type === TODO_ACTION.DELETE_TODO) {
    return payload.task
      ? successWrapper(`Задание "${payload.task}" успешно удалено`)
      : errorWrapper(`Внутренняя ошибка`);
  }
}
