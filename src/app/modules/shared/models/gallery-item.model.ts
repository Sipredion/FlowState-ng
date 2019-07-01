import {BaseEntity} from './base.entity';
import {GalleryType} from './gallery-type.enum';

export class GalleryItem extends BaseEntity {
  title: string;
  slug: string;
  summary: string;
  type: GalleryType;
  isFeatured: boolean;
  featuredImage: string;

  constructor(options: GalleryItem, id) {
    super(id);
    Object.keys(options).forEach(key => {
      this[key] = options[key];
    })
  }
}
