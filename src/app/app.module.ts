import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCfYZgyB5O7KGZ5RPRzKo0iuF9gNHnoiWE",
    authDomain: "bedrizer-9d01c.firebaseapp.com",
    databaseURL: "https://bedrizer-9d01c.firebaseio.com",
    storageBucket: "bedrizer-9d01c.appspot.com",
    messagingSenderId: "633017329060"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
