import { faker } from '@faker-js/faker';

export class UserDataFactory {
    static createNewUserData() {
    
    return {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      address: [ faker.location.streetAddress()],
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      postcode: faker.location.zipCode(),
      phone: faker.phone.number(),
      dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12, memorable: false, pattern: /[A-Za-z0-9!@#$%&*]/, prefix: 'Aa1!'
})
    };
  }

  static createInvalidLoginData() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12, memorable: true, pattern: /[A-Za-z0-9]/ }),
    };
  }
}