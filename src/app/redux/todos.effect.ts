import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {FilterTodos} from './todos.action';
import * as todoSelector from './todos.selectors';
import {map, withLatestFrom} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {AppState, TODO_ACTION} from "../share/global-variables";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {
  }

  @Effect()
  filterTodos = this.actions$.pipe(
    ofType(
      TODO_ACTION.ADD_TODO,
      TODO_ACTION.CHANGE_STATUS,
      TODO_ACTION.DELETE_TODO
    ),
    withLatestFrom(
      this.store.pipe(select(todoSelector.getFilter))
    ),
    map(([action, filter]) => new FilterTodos(filter)))
}
