import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  _setUrl = (partial: string): string => {
    return `http://localhost:3000/${partial}`;
  };

  constructor(public httpClient: HttpClient) {
  }

  _get<T>(url: string, options?: any): Observable<HttpEvent<T>> {
    return this.httpClient.get<T>(url, options);
  }

  _post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(url, body);
  }

  _put<T>(url: string, body: T): Observable<T> {
    return this.httpClient.put<T>(url, body);
  }

  _delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  }

  _getHeaders(type: string): HttpHeaders {
    return this.httpOptions.headers;
  }
}
