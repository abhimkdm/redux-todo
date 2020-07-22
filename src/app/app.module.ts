import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

//Shared Modules Customer,Orders
//M1, M2, M3
//Single Main module app

@NgModule({
  declarations: [
    //Components
    AppComponent,
    TodoComponent,
  ],
  imports: [
    //Modules
    BrowserModule,
  ],
  providers: [
    //Services
  ],
  bootstrap: [
    //Startup component
    AppComponent,
  ],
})
export class AppModule {}
