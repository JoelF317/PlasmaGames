import { LaunchListComponent } from './launch-list/launch-list.component';
import { SiteListComponent } from './site-list/site-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockChartComponent } from './stock-chart/stock-chart.component';


const routes: Routes = [
  {
    path: '',
    component: SiteListComponent
  },
  {
    path: ':loc',
    component: LaunchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [StockChartComponent]
})
export class AppRoutingModule { }
