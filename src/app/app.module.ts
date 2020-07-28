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
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//Shared Modules Customer,Orders
//M1, M2, M3
//Single Main module app

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/:name', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

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
    RouterModule.forRoot(routes),
    //RouterModule.forChild(routes) // Shared Module M1 - routes
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
