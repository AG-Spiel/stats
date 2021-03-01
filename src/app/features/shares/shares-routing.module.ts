import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSharesPageComponent } from './pages/all-shares-page/all-shares-page.component';
import { SharePageComponent } from './pages/share-page/share-page.component';

const routes: Routes = [
  {
    path: '',
    component: AllSharesPageComponent,
  },
  {
    path: ':wkn',
    component: SharePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharesRoutingModule {}
