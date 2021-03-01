import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
