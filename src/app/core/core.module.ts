import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, ColorpickerComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent, ColorpickerComponent],
})
export class CoreModule {}
