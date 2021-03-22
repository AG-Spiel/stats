import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'markt',
    loadChildren: () =>
      import('./features/market/market.module').then((m) => m.MarketModule),
  },
  {
    path: 'wkn',
    loadChildren: () =>
      import('./features/shares/shares.module').then((m) => m.SharesModule),
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./features/indizes/indizes.module').then((m) => m.IndizesModule),
  },
  {
    path: 'treemap',
    loadChildren: () =>
      import('./features/treemaps/treemaps.module').then(
        (m) => m.TreemapsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
