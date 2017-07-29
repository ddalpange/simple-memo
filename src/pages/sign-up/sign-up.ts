import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthManagerProvider } from '../../providers/auth-manager/auth-manager';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  emailAddress: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authManager: AuthManagerProvider,
    public afAuth: AngularFireAuth
  ) {
  }
  
  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }
  
  onClickSignUp() {
    // this.authManager.signUpUser(this.emailAddress, this.password);
    // this.navCtrl.pop();    
    this.afAuth.auth.createUserWithEmailAndPassword(this.emailAddress, this.password).then(res => console.log(res));
  }
  
  onClickNavBack() {
    this.navCtrl.pop();
  }
}