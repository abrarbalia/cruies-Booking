import { Injectable } from '@angular/core';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth();

  async sendLoginLink(email: string) {

  const actionCodeSettings = {
  url: 'http://localhost:4200/login',
  handleCodeInApp: true
};

    await sendSignInLinkToEmail(this.auth, email, actionCodeSettings);

    localStorage.setItem('emailForSignIn', email);
  }
}