import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSharesPageComponent } from './pages/all-shares-page/all-shares-page.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharesRoutingModule } from './shares-routing.module';
import { SharesTableComponent } from './components/shares-table/shares-table.component';

@NgModule({
  declarations: [
    AllSharesPageComponent,
    SharePageComponent,
    SharesTableComponent,
  ],
  imports: [CommonModule, SharesRoutingModule, SharedModule],
})
export class SharesModule {}
