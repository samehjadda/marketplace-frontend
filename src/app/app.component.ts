import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketplace';

  constructor(
    public auth: AngularFireAuth,
  ){}

  signInClicked(): void {
    this.auth.signInWithPopup(new GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
