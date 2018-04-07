import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
const config = {
  apiKey: "AIzaSyAwTevbDhXIfxoRir0reiBC0RyNzh5uOFM",
  authDomain: "my-chat-app-c5559.firebaseapp.com",
  databaseURL: "https://my-chat-app-c5559.firebaseio.com",
  projectId: "my-chat-app-c5559",
  storageBucket: "my-chat-app-c5559.appspot.com",
  messagingSenderId: "783495393701"
};
@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
