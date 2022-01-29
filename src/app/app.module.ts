import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NzMessageService} from "ng-zorro-antd/message";
import { HomeComponent } from './home/home.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCardModule} from "ng-zorro-antd/card";
import {RouterModule} from "@angular/router";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzListModule} from "ng-zorro-antd/list";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzRadioModule} from "ng-zorro-antd/radio";
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzCheckboxModule,
    NzInputModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
    NzAvatarModule,
    NzPopconfirmModule,
    NzCardModule,
    NzModalModule,
    NzListModule,
    NzRadioModule,
    NzSkeletonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NzMessageService}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
