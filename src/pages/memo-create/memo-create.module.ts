import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoCreatePage } from './memo-create';


@NgModule({
  declarations: [
    MemoCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(MemoCreatePage),
  ],
  exports: [
    MemoCreatePage
  ]
})
export class MemoCreatePageModule {}
