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
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { ISeries } from 'src/app/core/models/series';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() id = 'chart';
  @Input() dateFormat = 'dd.MM.yyyy';
  @Input() url?: string;
  @Input() data?: any[];
  @Input() series?: ISeries[];
  private chart?: am4charts.XYChart;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private zone: NgZone
  ) {}

  private createBasicChart(): am4charts.XYChart {
    const chart = am4core.create(this.id, am4charts.XYChart);
    chart.paddingRight = 20;
    chart.cursor = new am4charts.XYCursor();
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = 'right';
    chart.exporting.menu.verticalAlign = 'bottom';
    chart.dateFormatter.inputDateFormat = 'dd.MM.yyyy';
    chart.logo.disabled = true;
    chart.legend = new am4charts.Legend();
    chart.numberFormatter.numberFormat = '#.#a';
    chart.numberFormatter.bigNumberPrefixes = [
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

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 35;

    chart.scrollbarX = new am4core.Scrollbar();
    return chart;
  }

  private importDataSet(chart: am4charts.XYChart): void {
    if (this.url !== undefined) {
      chart.dataSource.url = this.url;
    } else if (this.data !== undefined) {
      chart.data = this.data;
    } else {
      throw new Error('No DataSource defined!');
    }
  }

  private createSeries(chart: am4charts.XYChart): void {
    if (this.series != null) {
      for (const graph of this.series) {
        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = graph.date;
        series.dataFields.valueY = graph.value;
        series.name = graph.label;
        series.tooltipText = `${graph.label}: [bold] {valueY}[/]`;
        series.stroke = am4core.color(graph.color.color);
        series.strokeWidth = 2;
        series.tensionX = 0.7;
        if (series.tooltip != null) {
          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color(graph.color.color);
          series.tooltip.label.fill = am4core.color(graph.color.colorLabel);
        }
      }
    } else {
      throw new Error(`Chart with id: '${this.id}' has no described series`);
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
      const chart = this.createBasicChart();
      this.importDataSet(chart);
      this.createSeries(chart);
      this.chart = chart;
    });
  }

  ngOnDestroy(): void {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit(): void {}
}
