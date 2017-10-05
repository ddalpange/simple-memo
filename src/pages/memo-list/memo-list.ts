import { Memo } from './../../models/memo/memo.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';

import { MemoCreatePage } from './../memo-create/memo-create';
import { MemoDetailPage } from './../memo-detail/memo-detail';

import { AuthManagerProvider } from './../../providers/auth-manager/auth-manager';
import { MemoManagerProvider } from './../../providers/memo-manager/memo-manager';
@IonicPage()

@Component({
  selector: 'page-memo-list',
  templateUrl: 'memo-list.html',
})

export class MemoListPage {

  searchKeyword: string = '';
  viewCount: number = 10;
  memoList: Observable<Memo[]>;

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

  doInfinite(infiniteScroll: any) {
    window.setTimeout(() => {
      this.viewCount += this.viewCount;
      infiniteScroll.complete();
    }, 500);
  }

  filterMemo(memo: Memo): boolean {
    return memo.title.includes(this.searchKeyword) || memo.contents.includes(this.searchKeyword);
  }

  onClickViewMemoDetail(memo: Memo, memoKey: string) {
    console.log(memo, memoKey);
    // this.navCtrl.push(MemoDetailPage, { memo: memo, memoKey: memoKey });
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