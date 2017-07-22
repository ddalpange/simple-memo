import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SignInPage } from './../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MemoDetailPage } from './../pages/memo-detail/memo-detail';
import { MemoListPage } from './../pages/memo-list/memo-list';
import { MemoCreatePage } from '../pages/memo-create/memo-create';

function getPages() {
  return [
    MyApp,
    SignInPage,
    SignUpPage,
    MemoListPage,
    MemoDetailPage,
    MemoCreatePage
  ]
}
@NgModule({
  declarations: getPages(),
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: getPages(),
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}