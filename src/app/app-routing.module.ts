import { LaunchListComponent } from './launch-list/launch-list.component';
import { SiteListComponent } from './site-list/site-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LaunchListComponent
  },
  {
    path: ':id', //may need to switch this
    component: SiteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
