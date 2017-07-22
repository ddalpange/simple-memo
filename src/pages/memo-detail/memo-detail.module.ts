import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoDetailPage } from './memo-detail';

@NgModule({
  declarations: [
    MemoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MemoDetailPage),
  ],
  exports: [
    MemoDetailPage
  ]
})
export class MemoDetailPageModule {}
