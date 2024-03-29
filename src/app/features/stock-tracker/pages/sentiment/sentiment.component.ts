import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Sentiment } from 'shared/models/insiderSentiment.interface';
import { StockTrackerService } from '../../services/stock-tracker.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  sentiments: Sentiment[] = [];
  symbol = '';
  companyName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockTrackerService: StockTrackerService
  ) { }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.route.queryParams.pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.companyName = params['companyName'];
      });

    if (this.symbol && !this.companyName) {
      this.stockTrackerService.searchBySymbol(this.symbol).pipe(takeUntil(this.destroy$))
        .subscribe(symbol => {
          this.companyName = symbol.result[0].description;
        });
    }

    if (this.symbol) {
      this.stockTrackerService.getInsiderSentiment(this.symbol).pipe(takeUntil(this.destroy$))
        .subscribe(sentiment => {
          this.sentiments = sentiment.data;
        });
    }
  }

  goBack() {
    this.router.navigate(['..']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
