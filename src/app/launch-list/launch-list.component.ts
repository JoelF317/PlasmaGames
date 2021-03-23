import { LaunchListGQL } from './../services/SpaceXFrontEnd.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
              private LaunchListService: LaunchListGQL) { }

  launchList$ = this.route.paramMap.pipe(
    switchMap( params =>
      {
        let loc = params.get('loc');
        if ( !loc ) { loc = ''; } // used to prevent compiler from complaining about possible null values
        return this.LaunchListService.fetch({ loc });
      }),
      map(res => res.data.launchesPast)
  );



  ngOnInit(): void {
  }

}
