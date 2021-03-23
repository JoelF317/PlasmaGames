import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SiteListComponent } from './site-list/site-list.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ChartAllModule, RangeNavigatorAllModule} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    SiteListComponent,
    LaunchListComponent,
    StockChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ChartAllModule,
    RangeNavigatorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
