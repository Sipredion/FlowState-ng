import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseMeta} from '../../public/models/base-meta.model';
import {FlowStateHostEntity} from '../../shared/services/flowstate-host-entity.enum';
import {Render} from '../../shared/models/render';
import {FeaturedArtService} from '../../public/services/featured-art.service';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService extends FeaturedArtService  {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getArtMeta(): Observable<Array<BaseMeta>> {
    const url = this._setUrl(FlowStateHostEntity.ART_META, 'art');
    const headers = this._getHeaders('data');
    return this._get<Array<BaseMeta>>(url, headers);
  }

  getAllArtwork(): Observable<Array<Render>> {
    const url = this._setUrl(FlowStateHostEntity.ART_ALL, 'art');
    const headers = this._getHeaders('data');
    return this._get<Array<Render>>(url, headers);
  }

  getSingleArtworkById(id: number): Observable<Render> {
    let url = this._setUrl(FlowStateHostEntity.ART_SINGLE_ARTWORK, 'art');
    const headers = this._getHeaders('data');
    url += `/${id}`;
    return this._get<Render>(url, headers);
  }
}
