import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthManagerProvider {

  constructor(
    public http: Http, 
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase) {
    console.log('Hello AuthManagerProvider Provider');
  }

  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => console.log(res));
  }

  signUpUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      console.log(newUser);
      this.afDB.database.ref('userProfile').child(newUser.uid).set({email: email});
    });
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

}
