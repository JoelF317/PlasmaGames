import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ChartAllModule, RangeNavigatorAllModule} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.sass']
})
export class StockChartComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
              private rangeNav: RangeNavigatorAllModule) { }

  dateTimeUTC$ = this.route.paramMap.pipe(
    switchMap( params =>
      {
        let dt = params.get('dt');
        if ( !dt ) { dt = ''; } // used to prevent compiler from complaining about possible null values
        return dt;
      }),

  );



  ngOnInit(): void {
  }

}
