export class BaseEntity {
  id: string | number;
  createdOn: Date;
  modifiedOn: Date;

  constructor(id?: string) {
    this.createdOn = new Date();
    if (this.createdOn) {
      this.modifiedOn = new Date();
    }
    if (id) {
      this.id = id;
    }
  }
}
