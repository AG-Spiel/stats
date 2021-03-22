import {
  Component,
  Inject,
  OnInit,
  NgZone,
  PLATFORM_ID,
  Input,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { ITreemapConfig } from 'src/app/core/models/treemap';
import { MatSelectChange } from '@angular/material/select';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss'],
})
export class TreemapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() treeMapId = 'treemap';
  @Input() url?: string;
  @Input() data?: any[];
  @Input() config: ITreemapConfig[] = [];
  selected?: string;
  title?: string;
  private treemap?: am4charts.TreeMap;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private zone: NgZone,
    private readonly themeService: ThemeService
  ) {}

  private createBasicTreeMap(): am4charts.TreeMap {
    const treemap = am4core.create(this.treeMapId, am4charts.TreeMap);
    treemap.exporting.menu = new am4core.ExportMenu();
    treemap.exporting.menu.align = 'right';
    treemap.exporting.menu.verticalAlign = 'bottom';
    treemap.logo.disabled = true;
    treemap.numberFormatter.numberFormat = '#.#a';
    treemap.numberFormatter.bigNumberPrefixes = [
      {
        number: 1000000,
        suffix: ' Mio.',
      },
      {
        number: 1000000000,
        suffix: ' Mrd.',
      },
      {
        number: 1000000000000,
        suffix: ' Bill.',
      },
    ];

    return treemap;
  }

  private importDataSet(treemap: am4charts.TreeMap): void {
    if (this.url !== undefined) {
      treemap.dataSource.url = this.url;
    } else if (this.data !== undefined) {
      treemap.data = this.data;
    } else {
      throw new Error('No DataSource defined!');
    }
  }

  private createMapObject(treemap: am4charts.TreeMap): void {
    if (this.config !== undefined) {
      treemap.dataFields.value = this.config[0].value;
      treemap.dataFields.name = this.config[0].name;

      /* Configure top-level series */
      const level1 = treemap.seriesTemplates.create('0');
      const level1Column = level1.columns.template;
      level1Column.column.cornerRadius(10, 10, 10, 10);
      level1Column.fillOpacity = 0.8;
      const currentTheme = this.themeService.getThemeObj();
      if (currentTheme !== undefined) {
        level1Column.stroke = am4core.color(currentTheme.backgroundColor);
      }
      level1Column.strokeWidth = 5;
      level1Column.strokeOpacity = 1;
      /* Add bullet labels */
      const level1Bullet = level1.bullets.push(new am4charts.LabelBullet());
      level1Bullet.locationY = 0.5;
      level1Bullet.locationX = 0.5;
      level1Bullet.label.text = '{name}';
    } else {
      throw new Error(
        `TreeMap with treeMapId: '${this.treeMapId}' has no described series`
      );
    }
  }

  private setMapConfig(newConfig: ITreemapConfig): void {
    if (this.treemap !== undefined) {
      this.treemap.dataFields.value = newConfig.value;
      this.treemap.dataFields.name = newConfig.name;
    } else {
      throw new Error('Treemap is not created!');
    }
  }

  // Run the function only in the browser
  browserOnly(f: () => void): void {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit(): void {
    // Chart code goes in here
    this.browserOnly(() => {
      const treemap = this.createBasicTreeMap();
      this.importDataSet(treemap);
      this.createMapObject(treemap);
      this.treemap = treemap;
    });
  }

  ngOnDestroy(): void {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.treemap) {
        this.treemap.dispose();
      }
    });
  }

  changeSelection(event: MatSelectChange): void {
    const newSelection = this.config.find(
      (confOption) => confOption.value === event.value
    );
    if (newSelection !== undefined) {
      this.title = newSelection.text;
      this.setMapConfig(newSelection);
      this.treemap?.dataSource.load();
    } else {
      throw new Error(`No valid option found with value ${event.value}`);
    }
  }

  ngOnInit(): void {
    this.selected = this.config[0].value;
    this.title = this.config[0].text;
  }
}
