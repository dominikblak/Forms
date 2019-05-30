import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBaseService } from './data-base.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { TemplateDrivenFormComponent } from './about/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ReactiveFormComponent } from './about/reactive-form/reactive-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardsService } from './auth/auth-guards.service';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';


// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBmo6xL5lG9a8o1BAvZnsEZ0-tFCxkkPaY',
  authDomain: 'kursangular.firebaseapp.com',
  databaseURL: 'https://kursangular.firebaseio.com',
  projectId: 'kursangular',
  storageBucket: 'kursangular.appspot.com',
  messagingSenderId: '600718833363'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    HomeComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    LoginComponent,
    SecretComponent,
    Level1Component,
    Level2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [DataBaseService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
