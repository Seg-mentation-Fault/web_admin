import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminService {
  constructor(public authf: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      return await this.authf.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
