import { v4 as uuid } from "uuid";

export class Role {
  id?: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
