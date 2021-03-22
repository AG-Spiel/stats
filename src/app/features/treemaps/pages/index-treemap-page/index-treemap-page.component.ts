import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/core/constants/urls.constants';
import { INDEX_TREEMAP_CONFIG } from '../../models/treemaps';

@Component({
  selector: 'app-index-treemap-page',
  templateUrl: './index-treemap-page.component.html',
  styleUrls: ['./index-treemap-page.component.scss'],
})
export class IndexTreemapPageComponent implements OnInit {
  url = URLS.AGS_STATS.INDEX.ALL;
  treeMapConfig = INDEX_TREEMAP_CONFIG;

  ngOnInit(): void {}
}
