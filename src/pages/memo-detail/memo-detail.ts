import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoCreatePage } from './../memo-create/memo-create';

@IonicPage()
@Component({
  selector: 'page-memo-detail',
  templateUrl: 'memo-detail.html',
})

export class MemoDetailPage {

  memo: Memo;
  title: string;
  contents: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public memoManager: MemoManagerProvider) {
  }
  
  ngOnInit() {
    this.memo = this.navParams.get('memo');
  }

  onOpenEditMemo(memo: Memo) {
    this.navCtrl.push(MemoCreatePage, { memo: memo });
  }
  
  onDeleteMemo(memo: Memo) {
    this.memoManager.deleteMemo(memo);
    this.navCtrl.pop();
  }
}