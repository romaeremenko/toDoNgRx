import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {FilterTodos, HideSpinner, SetMessagesHandler, TODO_ACTION} from './todos.action';
import * as todoSelector from './todos.selectors';
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../shared/interfaces";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions,
              private store: Store<IAppState>) {
  }

  @Effect()
  filterTodos = this.actions$.pipe(
    ofType(
      TODO_ACTION.ADD_TODO,
      TODO_ACTION.CHANGE_STATUS,
      TODO_ACTION.DELETE_TODO,
    ),
    withLatestFrom(
      this.store.pipe(select(todoSelector.getFilter))
    ),
    map(([action, filter]) => new FilterTodos(filter)));

  @Effect()
  hideSpinner = this.actions$.pipe(
    ofType(
      TODO_ACTION.FILTER_TODOS
    ),
    withLatestFrom(
      this.store.pipe(select(todoSelector.getFilter))
    ),
    map(() => new HideSpinner(false)));

  @Effect()
  setMessagesHandler = this.actions$.pipe(
    ofType(
      TODO_ACTION.ADD_TODO,
      TODO_ACTION.DELETE_TODO,
      TODO_ACTION.CHANGE_STATUS
    ),
    withLatestFrom(
      this.store.pipe(select(todoSelector.getFilter))
    ),
    map(([action, filter]) => new SetMessagesHandler(action)));
}
