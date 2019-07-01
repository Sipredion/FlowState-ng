import {GalleryItem} from './gallery-item.model';

export class Web extends GalleryItem {
  content: string;
  siteUrl?: string;

  constructor(options?: any) {
    if (options) {
      super(options, options.id);
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }
}
