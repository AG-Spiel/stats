import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketBoardComponent } from './pages/market-board/market-board.component';
import { MarketRoutingModule } from './market-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MarketBoardComponent],
  imports: [CommonModule, MarketRoutingModule, SharedModule],
})
export class MarketModule {}
