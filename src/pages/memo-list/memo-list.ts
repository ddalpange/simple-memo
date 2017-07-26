import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoCreatePage } from './../memo-create/memo-create';
import { MemoDetailPage } from './../memo-detail/memo-detail';

import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
@IonicPage()

@Component({
  selector: 'page-memo-list',
  templateUrl: 'memo-list.html',
})

export class MemoListPage {

  memoList: Memo[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public memoManager: MemoManagerProvider) {
  }
 
  ngOnInit() {
    this.memoList = this.memoManager.getMemoList();
    console.log(this.memoList);
  }

  onClickViewMemoDetail(memo: Memo) {
    this.navCtrl.push(MemoDetailPage, { memo: memo });
  }
  
  onClickCreateMemo() {
    this.navCtrl.push(MemoCreatePage);
  }
}