import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {

  constructor(private http: HttpClient) { }

  findPath(algorithm: string, start: number[], end: number[], rows: number, columns: number, walls:number[][]): Observable<any> {
    
    let options = {
      columns : columns,
      rows : rows,
      end : end,
      start : start,
      walls : walls
    };
    return this.http.post(BASE_URL + algorithm.replace(/ /g,""), options);
  }
}
