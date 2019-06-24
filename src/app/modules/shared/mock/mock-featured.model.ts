import {FeaturedModel} from '../models/featured.model';

function createMockData(type: string) {
  const arr = [1, 2, 3, 4, 5, 6];
  const mockData = [];

  const url = type === 'WEB' ?
    'https://i.ibb.co/vXzFNbs/Screen-Shot-2019-06-09-at-12-16-37-PM.png' :
    'https://cdna.artstation.com/p/assets/images/images/017/376/788/large/michael-mountain-realfinalrender-one-post.jpg?1555707014';

  arr.forEach((item, index) => {
    mockData.push({
      title: `${type}: ${index}`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent imperdiet bibendum dui non semper. Pellentesque hendrerit at nibh vitae malesuada.`,
      type: type,
      contentUrl: 'google.com',
      imageUrl: url
    });
  });

  return mockData;
}

export const mockArtModels: FeaturedModel[] = createMockData('ART');
export const mockWebModels: FeaturedModel[] = createMockData('WEB');
