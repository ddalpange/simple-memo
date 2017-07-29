import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoCreatePage } from './memo-create';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  declarations: [
    MemoCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(MemoCreatePage),
    FroalaEditorModule,
  ],
  exports: [
    MemoCreatePage
  ]
})
export class MemoCreatePageModule {}
