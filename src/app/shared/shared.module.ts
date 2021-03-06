import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { PageSubheadingComponent } from './components/page-subheading/page-subheading.component';
import { CardComponent } from './components/card/card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { TreemapComponent } from './components/treemap/treemap.component';
@NgModule({
  declarations: [
    PageWrapperComponent,
    PageHeadingComponent,
    PageSubheadingComponent,
    CardComponent,
    LineChartComponent,
    TreemapComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    PageWrapperComponent,
    CardComponent,
    LineChartComponent,
    TreemapComponent,
  ],
})
export class SharedModule {}
