import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Memo } from './../../models/memo/memo.interface';
import { MemoCreatePage } from './../memo-create/memo-create';
import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';

@IonicPage()
@Component({
  selector: 'page-memo-detail',
  templateUrl: 'memo-detail.html',
})

export class MemoDetailPage {

  memo: Memo;
  memoKey: string;
  title: string;
  contents: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public memoManager: MemoManagerProvider) {
  }
  
  ngOnInit() {
    this.memo = this.navParams.get('memo');
    this.memoKey = this.navParams.get('memoKey');
  }

  onOpenEditMemo() {
    this.navCtrl.push(MemoCreatePage, { memo: this.memo, memoKey: this.memoKey });
  }
  
  onDeleteMemo(memo: Memo) {
    this.memoManager.deleteMemo(this.memoKey);
    this.navCtrl.pop();
  }
}