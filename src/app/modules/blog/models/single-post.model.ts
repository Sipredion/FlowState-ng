import {GalleryItem} from '../../shared/models/gallery-item.model';

export class SinglePostModel extends GalleryItem {
  content: string;
  // TODO: Add more fields wtf

  constructor(options: any) {
    super(options, options.id);
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      })
    }
  }
}
