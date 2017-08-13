import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { MemoListPage } from './../memo-list/memo-list';
import { AuthManagerProvider } from '../../providers/auth-manager/auth-manager';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {
  
  emailAddress: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authManager: AuthManagerProvider
  ) {}

  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }

  onClickEmailLogIn() {
    let loader = this.loadingCtrl.create({
      content: '로그인 중입니다 ..'
    });

    loader.present();

    this.authManager.loginUser(this.emailAddress, this.password)
      .then(user => {
      console.log('성공!', user);
      loader.dismiss();
      this.navCtrl.setRoot(MemoListPage);
    })
    .catch(err => { 
      console.error('실패!', err);
      loader.dismiss();
      const alert = this.getFailAlert(err.message);
      alert.present();
    });;
  }

  onClickFacebookLogin() {
    const alert = this.getFailAlert('미완성 기능입니다.');
    alert.present();
  }

  getFailAlert(message: string) {
    return this.alertCtrl.create({
      title: 'failed..',
      subTitle: message,
      buttons: [{
        text: '확인'
      }]
    });
  }

  onClickSignUp() {
    this.navCtrl.push(SignUpPage);
  }
}