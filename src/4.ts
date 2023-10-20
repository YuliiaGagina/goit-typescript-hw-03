class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(this: Key): number {
    return this.signature;
  }
}
class Person extends Key {
  constructor(private key: Key) {
    super();
  }

  public getKey() {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  public comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
    return;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
