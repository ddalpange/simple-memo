import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthManagerProvider } from '../../providers/auth-manager/auth-manager';
import { LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  emailAddress: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authManager: AuthManagerProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
  }
  
  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }
  
  onClickSignUp() {
    let loader = this.loadingCtrl.create({
      content: '회원가입 중입니다 ..'
    });
    loader.present();
 
    this.authManager.signUpUser(this.emailAddress, this.password)
    .then(user => {
      console.log('성공!', user);
      loader.dismiss();
      const alert = this.getSuccessAlert();
      alert.present();
    })
    .catch(err => { 
      loader.dismiss();
      const alert = this.getFailAlert(err.message);
      alert.present();
    });
  }

  getSuccessAlert() {
    return this.alertCtrl.create({
      title: 'success!!',
      subTitle: '회원가입에 성공하였습니다.',
      buttons: [{
        text: '확인',
      }]
    });
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
  
  onClickNavBack() {
    this.navCtrl.pop();
  }
}