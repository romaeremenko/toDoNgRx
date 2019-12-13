import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Todos} from "../todo.model";

export const getTodosState = createFeatureSelector<Todos>('todoPage');

export const getFilter = createSelector(
  getTodosState,
  (state: Todos) => state.filter
);

export const getActualTodos = createSelector(
  getTodosState,
  ({todos, filter}: Todos) => filter
    ? todos.filter(todoItem => todoItem.status === filter)
    : todos
);
