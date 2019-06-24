import {BaseEntityModel} from './base-entity.model';

export class FeaturedModel extends BaseEntityModel {
  title: string;
  description: string;
  type: string; // WEB or ART
  imageUrl: string;
  contentUrl: string; // If Art, this will be a download link

  constructor(options: FeaturedModel) {
    super(options.id);
    Object.keys(options).forEach(key => {
      this[key] = options[key];
    });
  }
}
