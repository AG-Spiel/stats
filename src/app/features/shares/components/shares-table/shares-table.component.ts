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
import { IAg } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';

@Component({
  selector: 'app-shares-table',
  templateUrl: './shares-table.component.html',
  styleUrls: ['./shares-table.component.scss'],
})
export class SharesTableComponent implements OnInit, AfterViewInit, OnDestroy {
  activatedColumns = [
    'wkn',
    'name',
    'ceo',
    'founding',
    'isBanned',
    'inLiquidation',
    'isUserproject',
  ];
  data!: MatTableDataSource<IAg>;
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly statsService: AgsStatsService) {}

  searchShares(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    this.data.filter = searchValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.statsService.getAllShares().subscribe((shares) => {
        this.data = new MatTableDataSource(shares);
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
