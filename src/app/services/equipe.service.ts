import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }


  getAllEquipe(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/equipe');
  }

}
