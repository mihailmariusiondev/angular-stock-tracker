import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CompanyStockItemComponent } from '@stock-tracker/components/company-stock-item/company-stock-item.component';
import { SentimentComponent } from './pages/sentiment/sentiment.component';
import { StockTrackerComponent } from '@stock-tracker/pages/stock-tracker/stock-tracker.component';
import { StockTrackerRoutingModule } from '@stock-tracker/stock-tracker-routing.module';
import { SentimentItemComponent } from './components/sentiment-item/sentiment-item.component';


@NgModule({
  declarations: [
    StockTrackerComponent,
    CompanyStockItemComponent,
    SentimentComponent,
    SentimentItemComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
