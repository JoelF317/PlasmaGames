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

  constructor(private readonly route: ActivatedRoute,
              private readonly SiteService: SiteGQL) { }

site$ = this.route.paramMap.pipe(
  switchMap( params =>
    {
      let id = params.get('id');
      if ( !id ) { id = ''; } // used to prevent compiler from complaining about possible null values
      return this.SiteService.fetch({ id });
    }),
    map(res => res.data.launch?.launch_site)
);

  ngOnInit(): void {
  }

}
