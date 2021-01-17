import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from './../../object/constant';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkHomePageService {

  constructor(private http: HttpClient) { }
  
  getAllData():  Observable<any>{
    return this.http.get(`${BaseUrl}` + 'linkhomepage').pipe(
      map(data => { return data }),
      catchError( error => {
        console.log('redirect to ERROR page');
        return throwError( 'Something went wrong!' );
      })
    );
  }
}
