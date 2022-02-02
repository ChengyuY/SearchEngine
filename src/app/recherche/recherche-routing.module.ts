import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from "./avance/avance.component";
import { RechercheComponent } from "./recherche/recherche.component";
import {KmpComponent} from "./kmp/kmp.component";
import {RegexComponent} from "./regex/regex.component";
import {SuggestionComponent} from "./suggestion/suggestion.component";
import {ReloadComponent} from "./reload/reload.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {
    path: '',
    component: RechercheComponent
  },
  {
    path: 'avance',
    component: AvanceComponent
  },
  {
    path: 'kmp',
    component: KmpComponent
  },
  {
    path: 'regex',
    component: RegexComponent
  },
  {
    path: 'suggestion',
    component: SuggestionComponent
  },
  {
    path: 'reload',
    component: ReloadComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercheRoutingModule { }
