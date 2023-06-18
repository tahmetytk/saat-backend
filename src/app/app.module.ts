import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';


const firebaseConfig = {
  apiKey: "AIzaSyBfMQCqcvMuP9vA57PQS57KU88tukxMbvY",
  authDomain: "proje-5a578.firebaseapp.com",
  projectId: "proje-5a578",
  storageBucket: "proje-5a578.appspot.com",
  messagingSenderId: "203448959718",
  appId: "1:203448959718:web:24d90222eef9775083f127"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
