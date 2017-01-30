import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
declare var firebase : any;

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { HeaderComponent }  from './components/header.component';
import { FooterComponent }  from './components/footer.component';
import { AboutComponent }  from './components/about.component';
import { GamesComponent }  from './components/games.component';
import { BlogComponent }  from './components/blog.component';
import { ContactComponent }  from './components/contact.component';
import { BlogitemComponent }  from './components/blogitem.component';

import { FormsModule } from '@angular/forms';
//import {AngularFireModule} from 'angularfire2';

//import * as firebase from 'firebase';

 /* var config = {
    apiKey: "AIzaSyBL587TYOKqiDF6QTOykgilWLbCwxzd4Uk",
    authDomain: "test-e2459.firebaseapp.com",
    databaseURL: "https://test-e2459.firebaseio.com",
    storageBucket: "test-e2459.appspot.com",
    messagingSenderId: "573261486804"
  };*/
 // firebase.initializeApp(config);



@NgModule({
  imports:      [ BrowserModule, AppRouting, ReactiveFormsModule ,FormsModule/*,
  AngularFireModule.initializeApp(config)*/ ],
  declarations: [ AppComponent, HomeComponent, HeaderComponent, FooterComponent, AboutComponent, GamesComponent, BlogComponent, ContactComponent, BlogitemComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*<form [formGroup]="contactForm" (ngSubmit)="contactIn($event)" class="contactForm clearfix">
                <input formControlName="name" id="name" type="text" placeholder="Full Name">
                <input formControlName="email" type="text" placeholder="Email">  
                <span id="error"></span>
                <textarea formControlName="message" placeholder="Message" rows="8"></textarea>              
                <button type="submit">Subscribe</button>                
            </form>
            */