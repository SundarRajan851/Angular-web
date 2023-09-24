import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NoteComponent } from './note/note.component';
import { SharedService } from './note/shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyDtow7boXTNGM5fKD-ci3B-2SpjSS97rZY",
  authDomain: "angular-web-ae6f0.firebaseapp.com",
  projectId: "angular-web-ae6f0",
  storageBucket: "angular-web-ae6f0.appspot.com",
  messagingSenderId: "1099404988856",
  appId: "1:1099404988856:web:702c7c8cd34389f5747f4d"
};

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
