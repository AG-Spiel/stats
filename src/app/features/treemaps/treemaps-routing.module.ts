import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTreemapPageComponent } from './pages/index-treemap-page/index-treemap-page.component';
import { SharesTreemapPageComponent } from './pages/shares-treemap-page/shares-treemap-page.component';

const routes: Routes = [
  {
    path: 'ags',
    component: SharesTreemapPageComponent,
  },
  {
    path: 'indizes',
    component: IndexTreemapPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreemapsRoutingModule {}
