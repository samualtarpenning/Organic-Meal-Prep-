import { Component } from '@angular/core';

import firebase from 'firebase';
import { firebaseConfig } from './credentials';

import { Unsubscribe } from '@firebase/util';

import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    
 
  ) {
    firebase.initializeApp(firebaseConfig);

    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

 
  }
}
