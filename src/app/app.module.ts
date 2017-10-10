import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './components/about/about.component';
import {FormsModule} from "@angular/forms";

const todoRouter: Routes = [
  {path: '', component: TodoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(todoRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
