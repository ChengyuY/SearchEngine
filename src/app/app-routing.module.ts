import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

// ng g m app-routing --flat --module=app

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'recherche',
        // path#module_name
        loadChildren: () => import('./recherche/recherche.module').then(mod => mod.RechercheModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
