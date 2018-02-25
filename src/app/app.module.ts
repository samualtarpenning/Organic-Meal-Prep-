import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AuthProvider } from '../providers/auth/auth';
import { FormPage } from '../pages/form/form';
import { AutoCompleteModule } from 'ionic2-auto-complete';


@NgModule({
  declarations: [
    MyApp,
 
    FormPage
   
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
