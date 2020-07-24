import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo-service.service';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
  ],
  providers: [
    //Services
    TodoService, // Available for all the component and Single instance - Singleton Patern
  ],
  bootstrap: [
    //Startup component
    AppComponent,
  ],
})
export class AppModule {}
