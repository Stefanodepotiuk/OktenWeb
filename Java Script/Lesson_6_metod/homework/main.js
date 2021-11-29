// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// 'hello world', 'lorem ipsum', 'javascript is cool'
// let len_One = 'hello world';
// let len_two = 'lorem ipsum';
// let len_three = 'javascript is cool';

// - Знайти та вивести довижину настипних стрінгових значень
//  console.log(len_One.length);
//
//
//  console.log(len_two.length);
//
//
// console.log(len_three.length );

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let transform_len_One = len_One.toLocaleUpperCase();
// console.log(transform_len_One, len_two.length);
//
// let transform_len_two = len_two.toLocaleUpperCase();
// console.log(transform_len_two);
//
// let transform_len_three = len_three.toLocaleUpperCase();
// console.log(transform_len_three);

// - Перевести до нижнього регістру настипні стрінгові значення
// let dawn_len_One = len_One.toLocaleLowerCase();
// console.log(dawn_len_One);
//
// let dawn_len_two = len_two.toLocaleLowerCase();
// console.log(dawn_len_two);
//
// let dawn_len_three = len_three.toLocaleLowerCase();
// console.log(dawn_len_three);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let brudna_str = ' dirty string';
// let trim = brudna_str.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let stringToarray = (str) => {
//     return str.split(' ')
// };
//
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.write(arr);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length) => {
//     return str.substr(0,length)
// };
// let str = 'Каждый охотник желает знать';
// document.write(delete_characters(str,9));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insert_dash = (str) => {
//     return str.split(' ').join('+').toLocaleUpperCase();
// };
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));
// document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let first_sumvol_up = (str) => {
//
//     return str[0].toLocaleUpperCase() + str.slice(1);
// };
// let str ='html javascript php ';
// console.log(first_sumvol_up(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return  str.split(' ').map(word=>word.charAt(0).toLocaleUpperCase() + word.slice(1).join(' '));

};

console.log(capitalize('каждый охотник желает знать'));