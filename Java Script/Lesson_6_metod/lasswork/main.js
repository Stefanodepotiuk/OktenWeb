




// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
//  let cutString = (str, n) => {
//      const res = [];
//      while (str.length) {
//          res.push(str.substr(0, n))
//          str = str.slice(n)
//      }
//      console.log(res)
//      return res
//  };
//  document.writeln(cutString('Степан', 2))



// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');
//



//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(10, 100);
// console.log(result);
//


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(10, 100);
// console.log(result);


// // 1 варіант використовуючи попередню функцію
// result.sort(( a, b ) =>  a - b);
// console.log(result)
// result.sort(( a, b ) =>  b - a);
// console.log(result)
//
// // 2 варіант з новою функцією
//
// let sortRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 1; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.sort((a, b) => a - b);
// };
// console.log(sortRandom(10, 100));
//


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let funcFilter = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.filter(value => value % 2 === 0);
// };
// console.log(funcFilter(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arrayRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.map(value => value.toString());
// };
// console.log(arrayRandom(10, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
 //let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
 //let sortNums = (arr, direction) => {
 //    if (direction === 'asc') return arr.sort((a, b) => a - b);
 //    if (direction === 'desc') return arr.sort((a, b) => b - a);
 //};
 //console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );

// - є масив
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
//
//  //-- відсортувати його за спаданням за monthDuration
//
//  let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
//  console.log(newSort);
//
//
//  //-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//  let newFilter = coursesAndDurationArray.filter((value) => {
//      return value.monthDuration > 5;
//  });
//  console.log(newFilter)