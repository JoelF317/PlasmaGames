import { SiteGQL } from './../services/SpaceXFrontEnd.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteListComponent implements OnInit {

  constructor(
              private readonly SiteService: SiteGQL) { }

              siteList$ = this.SiteService
      .fetch()

      .pipe(
        map(
          res => res.data.launchpads
        )
      );

  ngOnInit(): void {
  }

}
