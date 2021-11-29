
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User( id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    
}
    


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr_user = [
    new User(12,'Stepan','Potiuk','qwe@gmail.com',380975972584),
    new User(11,'Igor','Tractor','e@gmail.com',380976472584),
    new User(23,'Taras','Adidas','a@gmail.com',380976472344),
    new User(4,'Petro','Muzlo','p@gmail.com',380973772344),
    new User(7,'Ivan', 'Kozel'  ,'i@gmail.com',380973772325),
    new User(98,'Ivan', 'Baran'  ,'ib@gmail.com',380673772325),
    new User(8,'Grugoriy', 'Baran'  ,'ibg@gmail.com',380675772325),
    new User(4,'Vova', 'Coca'  ,'ibcg@gmail.com',380674772325),
    new User(3,'Natali', 'Pepsi'  ,'aqwe@gmail.com',380674772345),
    new User(50,'Oksana', 'Slon'  ,'aqwase@gmail.com',380674772585)
];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id
// (filter)
//
let filterUser = arr_user.filter(user => {
    if (user.id % 2 === 0) {
        return user;
    }
});
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
 let sortUser = arr_user.sort((a,b) => a.id - b.id);
 console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let empty_arr = [
    new Client(12,'Stepan','Potiuk','qwe@gmail.com',380975972584,['fifa', 'game','pc','wt' ]),
    new Client(11,'Igor','Tractor','e@gmail.com',380976472584,['pen', 'thing','write' ]),
    new Client(23,'Taras','Adidas','a@gmail.com',380976472344,['spoon', 'market' ]),
    new Client(4,'Petro','Muzlo','p@gmail.com',380973772344, ['bool', 'game','pc4','rere','erere','goood' ]),
    new Client(7,'Ivan', 'Kozel'  ,'i@gmail.com',380973772325,['pes', 'game' ]),
    new Client(98,'Ivan', 'Baran'  ,'ib@gmail.com',380673772325,['karp', 'fish' ]),
    new Client(8,'Grugoriy', 'Baran'  ,'ibg@gmail.com',380675772325,['screen' ]),
    new Client(4,'Vova', 'Coca'  ,'ibcg@gmail.com',380674772325,['zebra', 'animal','food' ]),
    new Client(3,'Natali', 'Pepsi'  ,'aqwe@gmail.com',380674772345,['tiket', 'cinema' ]),
    new Client(50,'Oksana', 'Slon'  ,'aqwase@gmail.com',380674772585,['fifa', 'game','pc3' ])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort_user = empty_arr.sort((a, b) => b.order.length - a.order.length);
console.log(sort_user);