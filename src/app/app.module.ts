import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
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
