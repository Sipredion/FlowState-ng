import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseMeta} from '../models/base-meta.model';
import {FlowStateHostEntity} from '../../shared/services/flowstate-host-entity.enum';
import {Render} from '../../shared/models/render';

@Injectable({
  providedIn: 'root'
})
export class FeaturedArtService extends BaseHttpService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getFeaturedMeta(): Observable<Array<BaseMeta>> {
    const url = this._setUrl(FlowStateHostEntity.ART_FEATURED_META, 'art');
    const headers = this._getHeaders('data');
    return this._get<Array<BaseMeta>>(url, headers);
  }

  getFeaturedArtwork(): Observable<Array<Render>> {
    const url = this._setUrl(FlowStateHostEntity.ART_FEATURED, 'art');
    const headers = this._getHeaders('data');
    return this._get<Array<Render>>(url, headers);
  }

  getFeaturedArtByCategoryId(categoryId: number): Observable<Array<Render>> {
    let url = this._setUrl(FlowStateHostEntity.ART_CATEGORY_FEATURED, 'art');
    const headers = this._getHeaders('data');
    url += `/${categoryId}`;
    return this._get<Array<Render>>(url, headers);
  }
}
