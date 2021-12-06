// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divka = document.createElement('div');
divka.classList.add('wrap', 'collapse', 'alpha', 'beta')
divka.style.background = 'gold'
divka.style.color = 'black'
divka.style.fontSize = '25px'
divka.innerText = 'Добрий вечір'
document.body.appendChild(divka);

let sister_divka = divka.cloneNode('true');
document.body.appendChild(sister_divka);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let findMmenu = document.getElementsByClassName('menu')[0];
arr.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    findMmenu.appendChild(li);
});
//<ul className="menu"></ul>


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
coursesAndDurationArray.forEach(value => {
    let div = document.createElement('div');
    let some = ' ';
    for (const valueKey in value) {
        some += `-- ${valueKey} : ${value[valueKey]}`;

    }
    div.innerText = some;
    document.body.appendChild(div);
});


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.

coursesAndDurationArray.forEach(value => {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');

    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    p.style.fontSize = '20px'
    p.style.color = 'black';
    div.append(h1 , p);
    document.body.appendChild(div);

});