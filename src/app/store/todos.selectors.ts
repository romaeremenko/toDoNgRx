import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ITodos} from "../shared/interfaces";

export const getTodosState = createFeatureSelector<ITodos>('todoPage');

export const getFilter = createSelector(
  getTodosState,
  (state: ITodos) => state.filter
);

export const getActualTodos = createSelector(
  getTodosState,
  ({todos, filter}: ITodos) => {
    if (filter.searchFilter) {
      return filter.statusFilter != 2
        ? todos.filter(todoItem => todoItem.status === filter.statusFilter && todoItem.task.startsWith(filter.searchFilter))
        : todos.filter(todoItem => todoItem.task.startsWith(filter.searchFilter))
    } else {
      return filter.statusFilter != 2
        ? todos.filter(todoItem => todoItem.status === filter.statusFilter)
        : todos
    }
  }
);

export const isLoadingSpinnerActive = createSelector(
  getTodosState,
  ({loading}: ITodos) => loading
);

export const selectMessagesHandler = createSelector(
  getTodosState,
  ({messagesHandler}: ITodos) => messagesHandler
);
