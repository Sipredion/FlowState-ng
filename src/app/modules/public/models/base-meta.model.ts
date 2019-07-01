export class BaseMeta {
  name: string;
  slug: string;
  id: number;

  constructor(options?: any) {
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      })
    }
  }
}
