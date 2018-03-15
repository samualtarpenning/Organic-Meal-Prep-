import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { firebaseConfig } from './credentials';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { MenuPage } from '../pages/menu/menu';
import { TermsPage } from '../pages/terms/terms';
import { FormPage } from '../pages/form/form';
import { ThankyouPage } from '../pages/thankyou/thankyou';




@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    MenuPage,
    TermsPage,
    FormPage,
    ThankyouPage
  
 

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    TermsPage,
    FormPage,
    ThankyouPage
   
   
   
  ],
  providers: [
    StatusBar,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    
  
  ]
})
export class AppModule {}
