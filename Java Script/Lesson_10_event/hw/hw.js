// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
let findText = document.getElementById('text');
let btn = document.getElementById('btn');
btn.onclick = function () {
    findText.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let elementById = document.getElementById('asd');
elementById.onclick = function () {
    elementById.style.display = 'none';
};

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('button_age').onclick = function () {
    let elementAge = document.getElementById('age').value;
    if (typeof elementAge !== 'number') {
        alert('Введіть свій вік');
    } else if (+elementAge < 18) {
        alert('Вам ше рано на таке дивитись');
    } else {
        alert('відчувай себе наче дома')
    }
};





//

// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};





// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
        {name: 'Ігор', body: 'Вчи або не English'},
        {name: 'Іван', body: ' вже пізно'},
        {name: 'Тарас', body: 'О це круто. давай щераз'},
        {name: 'Оля', body: 'Воно, тобі треба?'},
    ];
let BigDiv = document.createElement('div');
for (const value of comments) {
    let DivElement = document.createElement('div');
    let h3 = document.createElement('h3');
    let ButtonElement = document.createElement('button');
    let p = document.createElement('p');
    let hr = document.createElement('hr');

    h3.innerText = value.name;
    p.innerHTML = value.body;
    ButtonElement.innerHTML = 'Нажати тут';

    ButtonElement.onclick = function () {
        p.classList.toggle('pHidden');
    };
    DivElement.append(h3, ButtonElement, p);
    BigDiv.append(DivElement, hr);
}
document.body.appendChild(BigDiv);