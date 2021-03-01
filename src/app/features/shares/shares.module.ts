import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSharesPageComponent } from './pages/all-shares-page/all-shares-page.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharesRoutingModule } from './shares-routing.module';

@NgModule({
  declarations: [AllSharesPageComponent, SharePageComponent],
  imports: [CommonModule, SharesRoutingModule, SharedModule],
})
export class SharesModule {}
