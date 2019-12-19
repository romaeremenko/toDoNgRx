import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToDoComponent} from './to-do/to-do.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {todosReducer} from "./store/todos.reducer";
import {CheckboxModule, ScrollPanelModule, SelectButtonModule, TabMenuModule, ToastModule} from "primeng";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {InputComponent} from './shared/input/input.component';
import {ButtonComponent} from './shared/button/button.component';
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./store/todos.effect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {SharedModule} from "./shared/shared.module";

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
        SharedModule,
        AppRoutingModule,
        StoreModule.forRoot({todoPage: todosReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        CheckboxModule,
        TabMenuModule,
        SelectButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([TodosEffects]),
        ToastModule,
        ScrollPanelModule
    ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
