import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ExamplesComponent } from './shared/examples/examples.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPipe } from './pipes/search.pipe';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule } from 'angularx-social-login';

import { RoutingModule } from './routing.module';
import { socialConfig } from './config/social.config';
//Shared Modules Customer,Orders
//M1, M2, M3
//Single Main module app

@NgModule({
  declarations: [
    //Components
    AppComponent,
    TodoComponent,
    ExamplesComponent,
    DashboardComponent,
    SearchPipe,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    //Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    SocialLoginModule,
    //RouterModule.forChild(routes) // Shared Module M1 - routes
  ],
  providers: [
    //Services
    TodoService, // Available for all the component and Single instance - Singleton Patern
    socialConfig,
  ],
  bootstrap: [
    //Startup component
    AppComponent,
  ],
})
export class AppModule {}
