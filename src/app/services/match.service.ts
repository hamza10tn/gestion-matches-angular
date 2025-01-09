import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }



  addMatch(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/Match', data)
  }
}
