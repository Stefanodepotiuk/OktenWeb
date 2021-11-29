// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
 class Address{
  constructor(street, suite, city, zipcode, geo) {
   this.street = street;
   this.suite = suite;
   this.city = city;
   this.zipcode = zipcode;
   this.geo = geo;
  }
 }
 class Geo{
  constructor(lat, lng) {
   this.lat = lat;
   this.lng = lng;
  }
 }

 class Company {
  constructor(name, catchPhrase, bs) {
   this.name = name;
   this.catchPhrase = catchPhrase;
   this.bs = bs;
  }
 }

  class User {
   constructor(id, name, username, email,  phone, website,) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',new Geo('-37.3159','81.1496'))
    this.phone = phone;
    this.website = website;
 this.company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
    }

   }

 let some_usres = new User(1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org');

 console.log(some_usres);



