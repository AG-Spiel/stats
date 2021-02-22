import { Component, EventEmitter, Output } from '@angular/core';
import { THEMES } from 'src/app/core/constants/themes.constants';
import { IThemeOption } from '../../services/theme.service';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss'],
})
export class ColorpickerComponent {
  options: IThemeOption[] = THEMES;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  changeTheme(themeToSet: string): void {
    this.themeChange.emit(themeToSet);
  }
}
