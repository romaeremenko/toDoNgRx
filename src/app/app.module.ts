import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoComponent} from './to-do/to-do.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {todosReducer} from "./redux/todos.reducer";
import {CheckboxModule} from "primeng";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todoPage: todosReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
