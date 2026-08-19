import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// @Service()
@Injectable({ providedIn: 'root' })


export class ApiService {
  constructor(private _http: HttpClient) {}


  postPolicyObjects(test: any): Observable<any> {
    console.log(test);

    return this._http.post<any>('https://jsonplaceholder.typicode.com/posts', test);
  }
}
