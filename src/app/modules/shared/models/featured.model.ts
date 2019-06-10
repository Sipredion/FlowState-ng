export class FeaturedModel {
  title: string;
  description: string;
  type: string; // WEB or ART
  imageUrl: string;
  contentUrl: string; // If Art, this will be a download link

  constructor(options: FeaturedModel) {
    Object.keys(options).forEach(key => {
      this[key] = options[key];
    });
  }
}
