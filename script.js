let s = 10;
let s1 = 20;
// a = prompt('Сколько вам лет?');

alert(s);
alert(s1);


let year = 2007;
// year = prompt('Когда выпустили первый iPhone?');

alert(year);


let userName1 = 'Brendan';
// userName = prompt('Кто создал JavaScript?');

alert(userName1);


let a1 = 10;
let a2 = 2;
alert(a1 + a2);  // будет 12

alert(a1 - a2);  // будет 8

alert(a1 / a2);  // будет 5


let result = 2;
alert(2 ** 5);  // будет 32


let a = 9;
let b = 2;
alert(a % b); // будет 1


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);  // будет 7


let age = prompt('Сколько вам лет?');
alert(age);


let user = {
    name: 'Mira',
    time: 22,
    isAdmin: false,}

let info = prompt('Какую информацию хотите узнать о пользователе ?');
let userName = prompt('Как вас зовут?', 'Mira');
let userTime = prompt('Сколько вам лет?');
alert('Какую информацию хотите узнать о пользователе ?, ${userName},${userTime}'); // Выведет значение

alert('Привет, Mira!');
