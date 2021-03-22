import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/core/constants/urls.constants';
import { SHARE_TREEMAP_CONFIG } from '../../models/treemaps';

@Component({
  selector: 'app-shares-treemap-page',
  templateUrl: './shares-treemap-page.component.html',
  styleUrls: ['./shares-treemap-page.component.scss'],
})
export class SharesTreemapPageComponent implements OnInit {
  url = URLS.AGS_STATS.SHARE.TREEMAP;
  sharesTreemapConfig = SHARE_TREEMAP_CONFIG;

  ngOnInit(): void {}
}
