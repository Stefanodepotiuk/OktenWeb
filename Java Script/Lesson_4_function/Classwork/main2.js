// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function www(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     }
//     else if (b < a && b < c) {
//         console.log(b)
//     }
//     else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log('числа рівні')
//     }
// }
//
// www(6,6,6);

 //- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
 // function www(a, b, c) {
 //     if (a > b && a > c) {
 //         console.log(a)
 //     }
 //     else if (b > a && b > c) {
 //         console.log(b)
 //     }
 //     else if (c > a && c > b) {
 //         console.log(c);
 //     } else {
 //         console.log('числа рівні')
 //     }
 // }
 //
 // www(23,45,78);

// - створити функцію яка повертає найбільше число з масиву
// function www() {
//     let ar = [1,2,3,4345,55,7,7,99,123];
//         console.log(Math.max(...ar));
//     }
// www();

// - створити функцію яка повертає найменьше число з масиву
// function qqq() {
//     let www = [2,33,44,345,7800,12];
//     console.log(Math.min(...www));
// }
// qqq();

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function asd() {
//     let a =0;
//     let qwe=[100,200,500];
//     for (let i = 0; i < qwe.length; i++) {
//         a = a + qwe[i];
//     }
//     console.log(a);
// }
//
// asd();

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let a = 0;
// function www() {
//     let ar = [100, 200, 600];
//     for (let i = 0; i < ar.length; i++) {
//         a += ar[i] / ar.length;
//     }
//     console.log(a);
// }
// www();

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function www() {
// let a = arguments[0];
// let b = arguments[0];
//     for (const num of arguments) {
//
//         if (a > num) {
//            a=num;
//         }
//         else if (a === num) {
//             a = num;
//         }
//         else {
//         }
//
//         if (b < num) {
//             b=num;
//         }
//         else if (b === num) {
//             b = num;
//         }
//         else {
//         }
//     }
//         console.log(b);
//     return a;
// }
// www(11,2,3,1);

//  А потім переглянув відео з вирішеням та зробив по іншому
// function www() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//
//     }
//
//         console.log(min);
//     return max;
// }
//
// www(22,33,5,55);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function www() {
//     let ar =[];
//     for (let i = 0; i <10 ; i++) {
//         ar[i] = Math.round(Math.random()*100);
//
//     }
//     return ar;
// }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let ar = [];
// function www(limit) {
//     let ar = [];
//     for (let i = 0; i < 10; i++) {
//         ar[i]=Math.round(Math.random()*limit);
//
//     }
//     console.log(ar);
//     return ar;
// }
//
// www(100);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function www(arr) {
//     let newarr = [];
//     for (let i = newarr.length - 1; ri = 0, i >= 0; i--, ri++) {
//         newarr[ri] = newarr [i];
//
//     }
// }