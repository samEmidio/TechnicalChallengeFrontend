import { EventService } from './services/event.service';
import { TokenInterceptor } from './token/tokenInterceptor.module';

import { AccountService } from './services/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { EventsComponent } from './views/events/events.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { EventResumeComponent } from './views/components/event-resume/event-resume.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventResumeCreateComponent } from './views/components/event-resume-create/event-resume-create.component';
import { EventDetailsComponent } from './views/event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EventsComponent,
    NavbarComponent,
    EventResumeComponent,
    EventResumeCreateComponent,
    EventDetailsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "login",
        "pathMatch": "full",
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent ,children:[
          {path:'events',component:EventsComponent},
          {path:'events/details/:id',component:EventDetailsComponent},
        ]},
    ])
  ],
  providers: [
    AccountService,
    EventService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
