import { AuthManagerProvider } from './../auth-manager/auth-manager';
import { Memo } from './../../models/memo/memo.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/*
  Generated class for the MemoManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MemoManagerProvider {

  memoList: FirebaseListObservable<any>

  constructor(
    public http: Http,
    public afDB: AngularFireDatabase,
    public authManager: AuthManagerProvider
  ) {
    this.initMemoList();
  }

  initMemoList() {
    this.memoList = this.afDB.list(`/memoList/${this.authManager.getUserInfo().uid}`);
  }

  getMemoList(): FirebaseListObservable<Memo> {
    return this.memoList;
  }

  createMemo(title: string, contents: string) {

    let memo: Memo = {
      title: title,
      uid: this.authManager.getUserInfo().uid,
      contents: contents,
      author: this.authManager.getUserInfo().email,
      publishedDate: new Date(),
      recentUpdatedDate: new Date(),
    }

    console.log(memo);

    this.memoList.push(memo);
  }

  deleteMemo(deleteMemo: any) {
    this.memoList.remove(deleteMemo);
  }

  editMemo(memoToChange: Memo, title: string, contents: string) {
    console.log('qfdf', memoToChange);
    memoToChange.title = title;
    memoToChange.contents = contents;
  }

}
