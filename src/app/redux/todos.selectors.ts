import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Todos} from "../todo.model";

export const getTodosState = createFeatureSelector<Todos>('todoPage');

export const getTodos = createSelector(
  getTodosState,
  (state: Todos) => state.todos
);
