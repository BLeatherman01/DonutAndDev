import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamousPeople } from '../interfaces/famous-people';

@Injectable({
  providedIn: 'root'
})
export class FamousPeopleService {
 
  baseUrl: string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http: HttpClient) { }

  getFamousPeople(): Observable<FamousPeople>{
    return this.http.get<FamousPeople>(this.baseUrl);
  }
 
}
