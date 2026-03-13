import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login implements OnInit {

  email = '';
  auth = getAuth();

  constructor(private authService: AuthService) {}

  async login() {
    await this.authService.sendLoginLink(this.email);
    alert('Login link sent to your email!');
  }

  async ngOnInit() {

    console.log("Login page loaded");

    if (isSignInWithEmailLink(this.auth, window.location.href)) {

      console.log("Email sign-in link detected");

      let email = localStorage.getItem('emailForSignIn');

      if (!email) {
        email = prompt('Please confirm your email');
      }

      if (email) {
        await signInWithEmailLink(this.auth, email, window.location.href);

        localStorage.removeItem('emailForSignIn');

        alert('Login successful!');
      }
    }

  }

}