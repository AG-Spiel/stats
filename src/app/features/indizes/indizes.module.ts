import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllIndizesPageComponent } from './pages/all-indizes-page/all-indizes-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndizesRoutingModule } from './indizes-routing.module';
import { IndizesTableComponent } from './components/indizes-table/indizes-table.component';

@NgModule({
  declarations: [
    AllIndizesPageComponent,
    IndexPageComponent,
    IndizesTableComponent,
  ],
  imports: [CommonModule, IndizesRoutingModule, SharedModule],
})
export class IndizesModule {}
