import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpPage } from './sign-up';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
    FormsModule
  ],
  exports: [
    SignUpPage
  ]
})
export class SignUpPageModule {}
