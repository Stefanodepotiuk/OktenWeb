// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,b) =>  a * b ;
// console.log(s(10, 74));

// - створити функцію яка обчислює та повертає площу кола
// let s = (r) => Math.pow(r,2) * Math.PI;
// console.log(s(2));

// - створити функцію яка обчислює та повертає площу циліндру
// - площа поверхні циліндра  S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
// let s = (r,h) => 2*Math.pow(r,2)*Math.PI + 2*Math.PI*r*h;
// console.log(s(3,5) + 'm2');

// - створити функцію яка приймає масив та виводить кожен його елемент
// let restFn = (...arg) => {
//     for (const argElement of arg) {
//         console.log(argElement)
//     }
// };
// restFn(1,2,33,44,3,23,45)
//

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let textP = (p) => document.write(`<p>${p}</p>`);
// textP('lolooololololkek');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul_li = (liText) =>
//     document.write(`
// <ul>
// <li>${liText}</li>
// <li>${liText}</li>
// <li>${liText}</li>
// </ul>`);
// ul_li('rer');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul_li = (liText, n_li) =>{
//     if (n_li > 0) {
//         for (let i = 0; i < n_li; i++) {
//             document.write(`<ul><li>${liText}</li></ul>`);
//         }
//     } else {
//         document.write('nerjrnyt chuslo')
//     }
// }
//     ul_li('rer',2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let camel = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// };
// camel([1,false,3,true,5,'vtv']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let box = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<h4>${arrElement}</h4>`);
//     }
// };
// box(['id','name','age']);