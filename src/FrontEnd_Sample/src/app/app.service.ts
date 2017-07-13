import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  put(url: string, data: any): Observable<any> {

    return this.http.put(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

}
