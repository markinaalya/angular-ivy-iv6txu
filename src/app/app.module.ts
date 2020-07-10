import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from '../shared/routing/app-routing.module';
import { SignInComponent } from '../components/sign-in/sign-in.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,],
  declarations: [ AppComponent, HelloComponent, SignInComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
