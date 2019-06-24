import {BaseEntityModel} from './base-entity.model';

export class RenderModel extends BaseEntityModel {

  title: string;
  description: string;
  urls?: RenderUrlSet;
  fileName: string;

  constructor(options?: any) {
    super(options);
    this.title = options && options.title;
    this.description = options && options.description;
    this.urls = options && new RenderUrlSet(options.urls) || new RenderUrlSet();
    this.fileName = options && options.fileName;
  }
}

export class RenderUrlSet {
  downloadUrl: string;
  printUrl: string;

  constructor(options?: any) {
    this.downloadUrl = options && options.downloadUrl;
    this.printUrl = options && options.printUrl;
  }
}
