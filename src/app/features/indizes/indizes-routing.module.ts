import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIndizesPageComponent } from './pages/all-indizes-page/all-indizes-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

const routes: Routes = [
  {
    path: '',
    component: AllIndizesPageComponent,
  },
  {
    path: ':id',
    component: IndexPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndizesRoutingModule {}
