import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=73f5351c849d4cc0bb0f564fd6498a41';
  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=73f5351c849d4cc0bb0f564fd6498a41';
  sportApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=73f5351c849d4cc0bb0f564fd6498a41';
  businessApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=73f5351c849d4cc0bb0f564fd6498a41';

  scienceApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=73f5351c849d4cc0bb0f564fd6498a41';

  entertainmentApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=73f5351c849d4cc0bb0f564fd6498a41';
  healthApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=73f5351c849d4cc0bb0f564fd6498a41';

  generalApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=73f5351c849d4cc0bb0f564fd6498a41';

  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this.http.get(this.techApiUrl);
  }

  sportsNews(): Observable<any> {
    return this.http.get(this.sportApiUrl);
  }

  businessNews(): Observable<any> {
    return this.http.get(this.businessApiUrl);
  }

  scienceNews(): Observable<any> {
    return this.http.get(this.scienceApiUrl);
  }

  entertainmentNews(): Observable<any> {
    return this.http.get(this.entertainmentApiUrl);
  }

  healthNews(): Observable<any> {
    return this.http.get(this.healthApiUrl);
  }

  generalNews(): Observable<any> {
    return this.http.get(this.generalApiUrl);
  }
}
