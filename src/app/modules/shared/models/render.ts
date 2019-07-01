import {GalleryItem} from './gallery-item.model';
import {FlowStateUtil} from '../utils/flow-state.util';

export class Render extends GalleryItem {
  content: string;
  urls: RenderUrlSet;
  hasMultiple?: boolean;

  constructor(options?: any) {
    if (options) {
      super(options, options.id);
      Object.keys(options).forEach(key => {
        if (key === 'urls' && options.urls) {
          this.urls = new RenderUrlSet(options.urls);
        } else {
          this[key] = options[key];
        }
      })
    }
  }

}

export class RenderUrlSet {
  downloadUrl: string;
  printUrl: string;
  artStationUrl: string;
  otherImages: Array<string>;

  constructor(options?: any) {
    if (options) {
      Object.keys(options).forEach(key => {
        if (key === 'otherImages' && options.otherImages) {
          this.otherImages = FlowStateUtil.convertToArray(options.otherImages);
        } else {
          this[key] = options[key];
          this.otherImages = [];
        }
      })
    } else {
      this.otherImages = [];
    }
  }
}
