import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexTreemapPageComponent } from './pages/index-treemap-page/index-treemap-page.component';
import { SharesTreemapPageComponent } from './pages/shares-treemap-page/shares-treemap-page.component';
import { TreemapsRoutingModule } from './treemaps-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [IndexTreemapPageComponent, SharesTreemapPageComponent],
  imports: [CommonModule, TreemapsRoutingModule, SharedModule],
})
export class TreemapsModule {}
