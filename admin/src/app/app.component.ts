import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, Validators } from '@angular/forms';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Console Admin';
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passControl = new FormControl('', [Validators.required]);
  email: string = '';
  password: string;

  constructor(public auth: AngularFireAuth) {}

  getErrorMessageEmail() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a Email';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass() {
    return 'You must enter a password';
  }

  async login() {
    try {
      return await this.auth.signInWithEmailAndPassword(this.email, this.password);
    } catch (err) {
      console.log(err);
      alert('This user does not have access');
      return null;
    }
  }

  async logout() {
    return await this.auth.signOut();
  }
}
