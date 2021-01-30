import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../../object/constant';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HlService {

  constructor(private http: HttpClient) { }
  
  getAllData():  Observable<any>{
    return this.http.get(`${BaseUrl}` + 'homelink').pipe(
      map(data => { return data }),
      catchError( error => {
        console.log('redirect to ERROR page');
        return throwError( 'Something went wrong!' );
      })
    );
  }

  getLink(id: number): Observable<any> {
    return this.http.get(`${BaseUrl}` + 'homelink/' + `${id}`);
  }
  
  createLink(linkhomepage: Object): Observable<any> {
    return this.http.post(`${BaseUrl}` + 'homelink', linkhomepage);
  }

  updateLink(id: number, value: any): Observable<any> {
    return this.http.put(`${BaseUrl}` + 'homelink/update/' + `${id}`, value);
  }

  deleteLink(id: number): Observable<any> {
    return this.http.delete(`${BaseUrl}` + 'homelink/delete/' + `${id}`);
  }
}