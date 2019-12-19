import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject, timer} from "rxjs";
import {AddTodo, FilterTodos, ShowSpinner} from "../store/todos.action";
import {getActualTodos, getFilter, isLoadingSpinnerActive, selectMessagesHandler} from "../store/todos.selectors";
import {MessageService, SelectItem} from 'primeng/api';
import {debounce, map, takeUntil} from "rxjs/operators";
import {v4 as uuid} from 'uuid';
import {FormBuilder} from "@angular/forms";
import {IAppState, IFilterTodos} from "../shared/interfaces";
import {TO_DOS_STATUS} from "../shared/enum";
import {FILTERED_OPTIONS} from "../shared/consts";
import {Todo} from "../shared/helpers";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers: [
    MessageService
  ]
})
export class ToDoComponent implements OnInit, OnDestroy {
  selectedType: TO_DOS_STATUS;
  todoItems: Todo[];
  isLoading: Observable<boolean>;
  form = this.fb.group({
    todoTitle: ''
  });
  readonly selectTypes: SelectItem[] = FILTERED_OPTIONS;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IAppState>,
              private messageService: MessageService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.isLoading = this.store.pipe(
      select(isLoadingSpinnerActive),
      takeUntil(this.destroy$)
    );

    this.store.pipe(
      select(selectMessagesHandler),
      takeUntil(this.destroy$)
    ).subscribe(actualMessage => {
      this.messageService.add(actualMessage);
    });

    this.store.pipe(
      select(getFilter),
      takeUntil(this.destroy$)
    )
      .subscribe(
        (actualSelectedType: IFilterTodos) => this.selectedType = actualSelectedType.statusFilter
      );

    this.store.pipe(
      select(getActualTodos),
      takeUntil(this.destroy$)
    )
      .subscribe((actualTodos: Todo[]) => {
        this.todoItems = actualTodos;
      });

    this.form.get('todoTitle').valueChanges
      .pipe(
        map(() => this.store.dispatch(new ShowSpinner(true))),
        debounce(() => timer(2000)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.filteredBySelectedType();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addTasks(): void {
    this.store.dispatch(new AddTodo(new Todo(uuid(), this.form.controls['todoTitle'].value, TO_DOS_STATUS.INPROGRESS)));
  }

  filteredBySelectedType(): void {
    this.store.dispatch(new FilterTodos({
      searchFilter: this.form.controls['todoTitle'].value,
      statusFilter: this.selectedType
    }));
  }
}
