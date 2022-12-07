import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { quote as Quote } from '../models/quote';
import { company as Company } from '../models/company';
import { Sentiment } from '../models/sentiment';

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {
  private readonly API_KEY = 'bu4f8kn48v6uehqi3cqg';
  private readonly API_BASE_URL = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) { }

  getQuote(symbol: string): Observable<Quote> {
    return this.http.get(`${this.API_BASE_URL}/quote`, {
      params: {
        token: this.API_KEY,
        symbol
      }
    }).pipe(
      map((response: any) => response as Quote),
    );
  }

  getCompanyName(symbol: string): Observable<Company> {
    return this.http.get(`${this.API_BASE_URL}/search`, {
      params: {
        token: this.API_KEY,
        q: symbol
      }
    }).pipe(
      map((response: any) => response.result[0] as Company),
    );
  }


  getSentiment(symbol: string): Observable<Sentiment[]> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();

    // Calculate the month and year for 3 months ago
    let fromMonth = currentMonth - 3;
    let fromYear = currentYear;
    if (fromMonth < 0) {
      fromMonth += 12;
      fromYear -= 1;
    }

    // Format the dates as strings in the YYYY-MM-DD format, with a leading zero for the month and day
    const from = `${fromYear}-${fromMonth.toString().padStart(2, '0')}-01`;
    const to = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;

    return this.http.get(`${this.API_BASE_URL}/stock/insider-sentiment`, {
      params: {
        token: this.API_KEY,
        symbol,
        from,
        to
      }
    }).pipe(
      map((response: any) => response.data as Sentiment[])
    );
  }


}