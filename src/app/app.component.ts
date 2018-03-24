import { Component } from '@angular/core';
import firebase from 'firebase';
import { firebaseConfig } from './credentials';
import { Unsubscribe } from '@firebase/util';




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

    firebase.auth().onAuthStateChanged(function(user) { 
      if (user.emailVerified) {
        console.log('Email is verified');
      }
      else {
        console.log('Email is not verified');
      }
    });

 
  }
}
