export class BaseEntityModel {
  id: string;
  createdOn: Date;
  modifiedOn: Date;

  constructor(id?: string) {
    this.createdOn = new Date();
    if (id) {
      this.id = id;
    }
  }
}
