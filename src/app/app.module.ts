import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SignUpPageModule } from './../pages/sign-up/sign-up.module';
import { SignInPageModule } from './../pages/sign-in/sign-in.module';
import { MemoListPageModule } from './../pages/memo-list/memo-list.module';
import { MemoDetailPageModule } from './../pages/memo-detail/memo-detail.module';
import { MemoCreatePageModule } from './../pages/memo-create/memo-create.module';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MemoManagerProvider } from './../providers/memo-manager/memo-manager';

import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    MemoCreatePageModule,
    MemoDetailPageModule,
    MemoListPageModule,
    SignInPageModule,
    SignUpPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemoManagerProvider
  ]
})
export class AppModule {}