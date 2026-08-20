import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPolicy } from '../sections/ocr-dashboard/components/policy-table/policy-table.component';

@Injectable({ providedIn: 'root' })

export class ApiService {
  POLICIES__POSTS = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}


  postPolicyObjects(policies: IPolicy[]): Observable<any> {
    return this._http.post<IPolicy[]>(this.POLICIES__POSTS, policies);
  }
}
