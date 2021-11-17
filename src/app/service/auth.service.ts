import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afa: AngularFireAuth,
  ) { }

  login(auth: Auth) {
    return this.afa.signInWithEmailAndPassword(auth.email, auth.password);
  }

  register(auth: Auth) {
    return this.afa.createUserWithEmailAndPassword(auth.email, auth.password);
  }
  
  getAuth() {
    return this.afa;
  }
}
