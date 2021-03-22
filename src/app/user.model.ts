export class User {
  id: bigint;
  username: string;
  mail?: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
