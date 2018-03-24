import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireModule } from 'angularfire2'
import { MenuPage } from '../menu/menu';

import { LoginPage } from '../login/login';
import { ThankyouPage } from '../thankyou/thankyou';


@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
 
  lastname: string;
  firstname: string;
  streetAddress: string;
  city: string;
  state: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private af: AngularFireDatabase) {
  }

  sendMessage( lastname: string, firstname: string, streetAddress: string, 
  city: string, state: string ) {
    
    this.af.list(`messages`).push({ lastname, firstname, streetAddress, city, state });
     
    this.lastname = "";
    this.firstname = "";
    this.streetAddress = "";
    this.city = "";
    this.state = "";
   this.navCtrl.setRoot(LoginPage);
  }

 

}
