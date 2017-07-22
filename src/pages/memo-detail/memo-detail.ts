import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoCreatePage } from './../memo-create/memo-create';

@IonicPage()
@Component({
  selector: 'page-memo-detail',
  templateUrl: 'memo-detail.html',
})

export class MemoDetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ngOnInit() {
  }

  onOpenEditMemo() {
    this.navCtrl.push(MemoCreatePage);
  }
  
  onDeleteMemo() {
    this.navCtrl.pop();
  }
}