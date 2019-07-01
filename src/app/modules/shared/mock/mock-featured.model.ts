import {GalleryItem} from '../models/gallery-item.model';
import {GalleryType} from '../models/gallery-type.enum';

function createMockData(type: GalleryType) {
  const arr = [1, 2, 3, 4, 5, 6];
  const mockData = [];

  const url = type === GalleryType.WEB ?
    'https://i.ibb.co/vXzFNbs/Screen-Shot-2019-06-09-at-12-16-37-PM.png' :
    'https://cdna.artstation.com/p/assets/images/images/017/376/788/large/michael-mountain-realfinalrender-one-post.jpg?1555707014';

  arr.forEach((item, index) => {
    mockData.push({
      title: `${type}: ${index}`,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent imperdiet bibendum dui non semper. Pellentesque hendrerit at nibh vitae malesuada.`,
      type: type,
      featuredImage: url
    });
  });

  return mockData;
}

export const mockArtModels: GalleryItem[] = createMockData(GalleryType.ART);
export const mockWebModels: GalleryItem[] = createMockData(GalleryType.WEB);
