import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutsDetail } from '../interfaces/donut-detail';
import { Results } from '../interfaces/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  baseUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json";
  baseDetailUrl: string = "https://grandcircusco.github.io/demo-apis/donuts/";
  
  constructor(private http: HttpClient) { }

  getDonuts(): Observable<Results> {
    return this.http.get<Results>(this.baseUrl);
  }
   
  getDonutDetail(donutId: string): Observable<DonutsDetail>{
    return this.http.get<DonutsDetail>(this.baseDetailUrl + donutId + '.json');
  }
}


