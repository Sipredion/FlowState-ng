import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {FlowStateHostEntity} from '../../shared/services/flowstate-host-entity.enum';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Render} from '../../shared/models/render';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService extends BaseHttpService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAllRenders(): Observable<any> {
    let url = this._setUrl(FlowStateHostEntity.RENDERS);
    const renders = [
      '3c8d9595c8537c55d2415eda2d82e125',
      '6eed1cdfc2444db55c65a6d42ba2040b',
      '7a8d60fdba6055e747030c1c74d08a5e',
      '8f899e41b9ac150f373ee2b095d5fa40',
      '779c392ec09a22912dc355d7915d5e8c',
      'a3b1dd12cff05247e96f84310dd167a9',
      'b4ee638afeb0439442d3854f43df1e92',
      'e0e79a2629012582a6083b97f92a1839',
    ];
    url += '/file/'+ renders;
    return this._get<Blob>(url, {
      responseType: 'blob' as 'json'
    });
  }

  // getRenderById(id: string): Observable<Render> {
  //   let url = this._setUrl(FlowStateHostEntity.RENDERS);
  //   url += `/${id}`;
  //   return this._get<Render>(url);
  // }

  getRenderImageByFileName(fileName: string): Observable<Blob> {
    let url = this._setUrl(FlowStateHostEntity.RENDERS);
    url += `/file/${fileName}`;
    return this._get<Blob>(url, {
      responseType: 'blob' as 'json'
    });
  }

  uploadRender(render: Render): Observable<string> {
    const url = this._setUrl(FlowStateHostEntity.RENDERS);
    // const headers = this._getHeaders('file');
    return this._post<any>(url, render);
  }
}
