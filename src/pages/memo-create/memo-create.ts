import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-memo-create',
  templateUrl: 'memo-create.html',
})

export class MemoCreatePage {
  title: string;
  contents: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
  }

  onChangeTitle(event: KeyboardEvent) {
    this.title = event.target['value'];
  }
  
  onChangeContents(event: KeyboardEvent) {
    this.contents = event.target['value'];
  }

  onSaveMemo() {
    this.navCtrl.pop();
  }
}