// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function group() {
//     let sum = 0;
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     }
//    if (arguments.length > 1) {
//         for (let i = 0; i < arguments.length; i++) {
//           sum= sum+arguments[i];
//         }
//        console.log(sum);
//     }
// }
// group(23,2);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let arr_1 = [1,2,3,4];
// let arr_2 = [3,5,7,9];
//
// function fuc() {
//     let New_qrr = [];
//     for (let i = 0; i < arr_1.length; i++) {
//         New_qrr[i] = arr_1[i] + arr_2[i];
//
//     }
//     console.log(New_qrr);
// }
// fuc();

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:

