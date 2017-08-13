import { AuthManagerProvider } from './../../providers/auth-manager/auth-manager';
import { FirebaseListObservable } from 'angularfire2/database';
import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';

import { MemoCreatePage } from './../memo-create/memo-create';
import { MemoDetailPage } from './../memo-detail/memo-detail';

import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
@IonicPage()

@Component({
  selector: 'page-memo-list',
  templateUrl: 'memo-list.html',
})

export class MemoListPage {

  searchKeyword: string = '';
  memoList: FirebaseListObservable<Memo>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public authManager: AuthManagerProvider,
    public memoManager: MemoManagerProvider) {
  }
 
  ngOnInit() {
    this.memoList = this.memoManager.getMemoList();
  }

  filterMemo(memo: Memo): boolean {
    return memo.title.includes(this.searchKeyword) || memo.title.includes(this.searchKeyword);
  }

  onClickViewMemoDetail(memo: Memo) {
    this.navCtrl.push(MemoDetailPage, { memo: memo });
  }
  
  onClickCreateMemo() {
    this.navCtrl.push(MemoCreatePage);
  }

  onClickMoreOption() {
    const actionSheet = this.getMoreOptionActionSheet();
    actionSheet.present();
  }

  getMoreOptionActionSheet() {
    return this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            this.authManager.logoutUser();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
  }
}