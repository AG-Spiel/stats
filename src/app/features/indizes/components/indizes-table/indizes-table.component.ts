import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/fr';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IIndex } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';
registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-indizes-table',
  templateUrl: './indizes-table.component.html',
  styleUrls: ['./indizes-table.component.scss'],
})
export class IndizesTableComponent implements OnInit, AfterViewInit, OnDestroy {
  activatedColumns = [
    'id',
    'name',
    'boersenwert',
    'buchwert',
    'aktien',
    'anleihen',
    'kredite',
    'bargeld',
  ];
  data!: MatTableDataSource<IIndex>;
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly statsService: AgsStatsService) {}

  searchIndizes(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    this.data.filter = searchValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.statsService.getAllIndizes().subscribe((indizes) => {
        this.data = new MatTableDataSource(indizes);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
      })
    );
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
