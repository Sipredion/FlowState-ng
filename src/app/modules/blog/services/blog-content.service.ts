import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FlowStateHostEntity} from '../../shared/services/flowstate-host-entity.enum';
import {SinglePostModel} from '../models/single-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService extends BaseHttpService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getPostMeta(): Observable<Array<{ name: string, slug: string, id: number }>> {
    const url = this._setUrl(FlowStateHostEntity.BLOG_POST_META, 'blog');
    const headers = this._getHeaders('data');
    return this._get<Array<{ name: string, slug: string, id: number }>>(url, headers);
  }

  getFeaturedPostsMeta(): Observable<Array<{name: string, slug: string, id: number}>> {
    const url = this._setUrl(FlowStateHostEntity.BLOG_FEATURED_META, 'blog');
    const headers = this._getHeaders('data');
    return this._get<Array<{name: string, slug: string, id: number}>>(url, headers);
  }

  getAllPosts(): Observable<Array<SinglePostModel>> {
    const url = this._setUrl(FlowStateHostEntity.BLOG_ALL_POSTS, 'blog');
    const headers = this._getHeaders('data');
    return this._get<Array<SinglePostModel>>(url, headers);
  }

  getPostById(id: number): Observable<SinglePostModel> {
    let url = this._setUrl(FlowStateHostEntity.BLOG_SINGLE_POST, 'blog');
    const headers = this._getHeaders('data');
    url += `/${id}`;
    return this._get<SinglePostModel>(url, headers);
  }

  getFeaturedPosts(): Observable<Array<SinglePostModel>> {
    const url = this._setUrl(FlowStateHostEntity.BLOG_FEATURED, 'blog');
    const headers = this._getHeaders('data');
    return this._get<Array<SinglePostModel>>(url, headers);
  }

  getFeaturedByCategoryId(categoryId: number): Observable<Array<SinglePostModel>> {
    let url = this._setUrl(FlowStateHostEntity.BLOG_CATEGORY_FEATURED, 'blog');
    const headers = this._getHeaders('data');
    url += `/${categoryId}`;
    return this._get<Array<SinglePostModel>>(url, headers);
  }
}
