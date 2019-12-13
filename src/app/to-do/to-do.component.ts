import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../todo.model";
import {select, Store} from "@ngrx/store";
import {Subject} from "rxjs";
import {AddTodo, FilterTodos} from "../redux/todos.action";
import {getActualTodos, getFilter} from "../redux/todos.selectors";
import {SelectItem} from 'primeng/api';
import {takeUntil} from "rxjs/operators";
import {AppState, FILTERED_OPTIONS, TO_DOS_STATUS} from "../share/global-variables";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {
  todoTitle: string;
  selectedType: TO_DOS_STATUS;
  todoItems: Todo[];
  readonly selectTypes: SelectItem[] = FILTERED_OPTIONS;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(getFilter),
      takeUntil(this.destroy$)
    )
      .subscribe((actualSelectedType: TO_DOS_STATUS) => this.selectedType = actualSelectedType);

    this.store.pipe(
      select(getActualTodos),
      takeUntil(this.destroy$)
    )
      .subscribe((actualTodos: Todo[]) => {
        this.todoItems = actualTodos;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addTasks(): void {
    this.store.dispatch(new AddTodo(new Todo(this.todoTitle, TO_DOS_STATUS.INPROGRESS)));
    this.todoTitle = '';
  }

  filteredBySelectedType(): void {
    this.store.dispatch(new FilterTodos(this.selectedType));
  }
}
