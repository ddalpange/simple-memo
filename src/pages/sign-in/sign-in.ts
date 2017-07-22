import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { MemoListPage } from './../memo-list/memo-list';

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
  ) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
  ngOnInit() {
  }
  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }
  onChangeEmailAddress(event: any) {
    this.emailAddress = event.target.value;
  }
  onChangePassword(event: any) {
    this.password = event.target.value;
  }
  
  onClickEmailLogIn() {
    this.navCtrl.setRoot(MemoListPage);    
  }
  onClickFacebookLogin() {
  }
  onClickSignUp() {
    this.navCtrl.push(SignUpPage);
  }
}