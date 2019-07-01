import { Injectable } from '@angular/core';
import {FeaturedArtService} from './featured-art.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseMeta} from '../models/base-meta.model';
import {Render} from '../../shared/models/render';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService extends FeaturedArtService {

  featuredArt: Array<Render>;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getFeaturedMeta(): Observable<Array<BaseMeta>> {
    return super.getFeaturedMeta();
  }

  getFeaturedArtwork(): Observable<Array<Render>> {
    return super.getFeaturedArtwork().pipe(
      tap(artwork => {
        this.featuredArt = artwork;
      })
    );
  }

  getFeaturedArtByCategoryId(categoryId: number): Observable<Array<Render>> {
    return super.getFeaturedArtByCategoryId(categoryId);
  }
}
