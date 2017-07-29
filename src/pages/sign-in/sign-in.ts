import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { MemoListPage } from './../memo-list/memo-list';
import { AuthManagerProvider } from '../../providers/auth-manager/auth-manager';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {
  
  emailAddress: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authManager: AuthManagerProvider
  ) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
  ngOnInit() {
  }
  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }
  onClickEmailLogIn() {
    // this.afAuth.auth.signInAnonymously().then(res => console.log(res));
    this.authManager.loginUser(this.emailAddress, this.password);
    // this.navCtrl.setRoot(MemoListPage);    
  }
  onClickFacebookLogin() {
    console.log(this.emailAddress);
    console.log(this.password);
  }
  onClickSignUp() {
    this.navCtrl.push(SignUpPage);
  }
}