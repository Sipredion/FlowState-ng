import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  httpOptions = {
    headers: undefined as HttpHeaders
  };

  _setUrl = (partial: string, type?: string): string => {
    const local = 'http://localhost:3000';
    const wordPress = 'http://flow-state-content.test/wp-json';
    let url: string;
    type && type === 'blog' ?
      url = `${wordPress}/blog-posts/${partial}` :
      type === 'art' ?
        url = `${wordPress}/artwork/${partial}` :
        url = `${local}/${partial}`;
    return url;
  };

  constructor(public httpClient: HttpClient) {
  }

  _get<T>(url: string, options?: any): Observable<T> {
    return this.httpClient.get<T>(url, {headers: options}).pipe(
      take(1)
    );
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
    switch (type) {
      case 'data':
        this.httpOptions.headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpOptions.headers;
      case 'file':
        this.httpOptions.headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
        return this.httpOptions.headers;
    }
  }
}
