import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { RechercheComponent } from './recherche/recherche.component';
import { AvanceComponent } from './avance/avance.component';
import { NzInputModule } from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import {NzListModule} from "ng-zorro-antd/list";
import { RegexComponent } from './regex/regex.component';
import { KmpComponent } from './kmp/kmp.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ReloadComponent } from './reload/reload.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  declarations: [
    RechercheComponent,
    AvanceComponent,
    RegexComponent,
    KmpComponent,
    SuggestionComponent,
    ReloadComponent
  ],
  imports: [
    CommonModule,
    RechercheRoutingModule,
    NzInputModule,
    NzTableModule,
    FormsModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    FormsModule,
    NzSkeletonModule,
    NzDescriptionsModule,
    NzCommentModule,
    NzListModule,
    NzPopoverModule
  ]
})
export class RechercheModule {
}
