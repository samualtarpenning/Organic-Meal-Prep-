
import { PasswordValidator } from '../../validators/password.validator';
import { PhoneValidator } from '../../validators/phone.validator';
import { Country } from './form.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase/app';



@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

  validations_form: FormGroup;

 



 
  genders: Array<string>;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, ) { }

  ionViewWillLoad() {
  

    this.genders = [
      "Male",
      "Female"
    ];

    var messagesRef = firebase.database().ref('messages');

    document.getElementById('validations_form').addEventListener('submit', submitForm);
   
   
   function submitForm(e){
     e.preventDefault();



     var firstName = getInputVal('firstName');
     var lastName = getInputVal('lastName');
     var email = getInputVal('email');
     var addressLine1 = getInputVal('addressLine1');
     var addressLine2 = getInputVal('addressLine2');

     saveMessage(firstName, lastName, email, addressLine1, addressLine2);
   
   }


  

   function getInputVal(id){
     return document.getElementById(id);
   }


   function saveMessage(firstName, lastName, email, addressLine1, addressLine2){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
       firstName: firstName,
       lastName: lastName,
       email: email,
       addressLine1: addressLine1,
       addressLine2: addressLine2

     });
   }


    this.validations_form = this.formBuilder.group({
      
     
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

      ])),
      gender: new FormControl(this.genders[0], Validators.required),
    
     
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
  
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'address1': [
      { type: 'required', message: 'Line 1 is required.' }
    ],

    'address2': [
      { type: 'required', message: 'Line 2 is required.' }
    ],
  
  
  };


  


}

