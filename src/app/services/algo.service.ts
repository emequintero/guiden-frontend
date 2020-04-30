import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {

  constructor(private http: HttpClient) { }

  findPath(algorithm: string, start: number[], end: number[], rows: number, columns: number): Observable<any> {
    let params:string = "?";
    params += `start=${start}&`;
    params += `end=${end}&`;
    params += `rows=${rows}&`;
    params += `columns=${columns}`;
    return this.http.get(BASE_URL + algorithm + params);
  }
}
