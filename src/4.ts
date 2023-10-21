class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}
class Person extends Key {
  constructor(private key: Key) {
      // мені підкреслює червоним і каже що потрібен супер
      
  }

    public getKey(): {}{
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
 private tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  public comeIn(tenant: Person): Person[]  { 
    if (this.door) {
        this.tenants.push(tenant);
        
      }
      return this.tenants
    }
   
}

class MyHouse extends House {
  openDoor(key: Key) : void {
    if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
       
    }
   
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
