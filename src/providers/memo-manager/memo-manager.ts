import { MEMOLIST } from './../../mocks/memo/memo-list.mock';
import { Memo } from './../../models/memo/memo.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MemoManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MemoManagerProvider {

  memoList: Memo[];

  constructor(public http: Http) {
    this.initMemoList();
  }

  initMemoList() {
    this.memoList = MEMOLIST;
  }

  getMemoList(): Memo[] {
    return this.memoList;
  }

  getMemo(key: number): Memo {
    let index = this.memoList.findIndex((memo: Memo, i: number) => {
      return memo.key === key;
    });

    return this.memoList[index] || null;
  }

  createMemo(title: string, contents: string, author: string) {
    let lastMemo = this.memoList[this.memoList.length - 1];
    let lastMemoKey = lastMemo ? lastMemo.key : -1;
    let key = lastMemoKey + 1;

    let memo: Memo = {
      key: key,
      title: title,
      contents: contents,
      author: author,
      publishedDate: new Date(),
      recentUpdatedDate: new Date(),
    }

    this.memoList.push(memo);
  }

  deleteMemo(deleteMemo: Memo) {
    let index = this.memoList.findIndex((memo: Memo, i: number) => {
      return memo.key === deleteMemo.key;
    });

    this.memoList.splice(index, 1);
  }

  editMemo(memoToChange: Memo) {
    let index = this.memoList.findIndex((memo: Memo, i: number) => {
      return memo.key === memoToChange.key;
    });

    this.memoList[index].title = memoToChange.title;
    this.memoList[index].contents = memoToChange.contents;
    this.memoList[index].recentUpdatedDate = new Date();
  }

}
