import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  onClickDDalpange() {
    window.location.href = "https://ddalpange.github.io";
  }
  
  onClickSignUp() {
    this.navCtrl.pop();    
  }
  
  onClickNavBack() {
    this.navCtrl.pop();
  }
}