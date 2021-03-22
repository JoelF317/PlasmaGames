import { LaunchListGQL } from './../services/SpaceXFrontEnd.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private LaunchListService: LaunchListGQL) { }

    launchList$ = this.LaunchListService
      .fetch({limit: 40})

      .pipe(
        map(
          res => res.data.launchesPast
        )
      );


  ngOnInit(): void {
  }

}
