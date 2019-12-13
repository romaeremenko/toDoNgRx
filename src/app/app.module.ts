import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoComponent} from './to-do/to-do.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {todosReducer} from "./redux/todos.reducer";
import {CheckboxModule, SelectButtonModule, TabMenuModule} from "primeng";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { InputComponent } from './share/input/input.component';
import { ButtonComponent } from './share/button/button.component';
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./redux/todos.effect";

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todoPage: todosReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    CheckboxModule,
    TabMenuModule,
    SelectButtonModule,
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
