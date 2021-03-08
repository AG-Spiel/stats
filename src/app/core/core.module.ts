import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent, ColorpickerComponent],
  imports: [CommonModule, SharedModule, RouterModule, HttpClientModule],
  exports: [NavbarComponent, ColorpickerComponent],
})
export class CoreModule {}
