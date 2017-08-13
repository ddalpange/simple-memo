import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthManagerProvider {

  userInfo: firebase.User = null;
  authState: Observable<firebase.User>

  constructor(
    public http: Http, 
    public afAuth: AngularFireAuth) {
    this.initAuth();
  }

  initAuth() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(
      (user: firebase.User) => {
        if(user) {
          this.setUserInfo(user);
        } else {
          this.setUserInfo(null);
        }
      }
    )
  }

  getAuthState(): Observable<firebase.User> {
    return this.authState;
  }

  getUserInfo() {
    return this.userInfo;
  }

  setUserInfo(userInfo: firebase.User) {
    this.userInfo = userInfo;
  }

  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUpUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

}
