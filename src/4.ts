// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок
// взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature,
// яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()).
// Також цей клас повинен мати метод getSignature, який повертає значення властивості
// signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу
// Key і зберігає їх у приватному властивості key.Клас Person
// повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка
// може бути відкрита(true), або закрита(false), і key, яка
// зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає
// об'єкт класу Person у масив tenants, якщо door відкрита. Ваш
// абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає
// об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу
// House.Реалізуйте метод openDoor у цьому класі.Якщо ключ,
// переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити
// сценарій, в якому людина приходить додому.

//  В класі Key constructor використовувати не потрібно
class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

// class Person для властивості Key використайте скорочену ініціалізацію
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

// В класі House для властивості Key використайте скорочену ініціалізацію
// Властивості door і tenants оголосіть до конструктора, вкажіть початкове значення,
// модифікатори доступу і типізуйте їх.
abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

// В класі MyHouse constructor і super використовувати не потрібно, так як нових
// властивостей додавати не будемо.
class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}
// Наприклад, ось так:
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
