import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    public alertCtrl: AlertController,
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

  onSaveMemo() {
    
    if(!this.title || !this.contents) {
      const alert = this.getValidationFailAlert();
      alert.present();
      return;
    }

    if(this.memo) {
      this.memoManager.editMemo(this.memo, this.title, this.contents);
    } else {
      this.memoManager.createMemo(this.title, this.contents);
    }
    
    this.navCtrl.pop();
  }

  getValidationFailAlert() {
    return this.alertCtrl.create({
      title: '앗!!',
      subTitle: '제목과 내용중 안쓰신게 있네요!'
    });
  }
}