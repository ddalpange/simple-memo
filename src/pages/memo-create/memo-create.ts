import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-memo-create',
  templateUrl: 'memo-create.html',
})

export class MemoCreatePage {
  memo: Memo;
  title: string;
  contents: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public memoManager: MemoManagerProvider) {
  }

  ngOnInit() {
    let memo = this.navParams.get('memo');
    if(memo) {
      this.memo = memo;
      this.title = memo.title;
      this.contents = memo.contents;
    }
  }

  onChangeTitle(event: KeyboardEvent) {
    this.title = event.target['value'];
  }
  
  onChangeContents(event: KeyboardEvent) {
    this.contents = event.target['value'];
  }

  onSaveMemo() {
    if(this.memo) {

      this.memoManager.editMemo(this.memo, this.title, this.contents);
    } else {
      this.memoManager.createMemo(this.title, this.contents);
    }
    this.navCtrl.pop();
  }
}