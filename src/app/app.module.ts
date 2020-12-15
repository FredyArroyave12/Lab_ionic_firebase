import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
export const firebaseConfig = {
  //fill this data with the data you get from the firebase console
  apiKey: "AIzaSyB2rEahqb6R1vMQrBDrcLfKm47M__0-8xw",
    authDomain: "lab-firebase-45950.firebaseapp.com",
    projectId: "lab-firebase-45950",
    storageBucket: "lab-firebase-45950.appspot.com",
    messagingSenderId: "1082422306183",
    appId: "1:1082422306183:web:78a7d3c516948d02dadf22",
    measurementId: "G-D32Y6KZFGS"
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,        AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
