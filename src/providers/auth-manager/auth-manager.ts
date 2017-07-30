import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthManagerProvider {

  userInfo: firebase.User = null;
  authState: Observable<firebase.User>

  constructor(
    public http: Http, 
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase) {
    this.initAuth();
  }

  initAuth() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(
      (user: firebase.User) => {
        if(user) {
          this.userInfo = user;
        } else {
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
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(userInfo => {
              this.setUserInfo(userInfo);
              return userInfo;
            });
  }

  signUpUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(userInfo => {
              this.setUserInfo(userInfo);
              return userInfo;
            });;
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

}
