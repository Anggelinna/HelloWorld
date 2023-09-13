let password = 'тиктак';  // задание 1.
let parol = prompt ('Ведите пароль');

if (parol) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = 2;  // задание 2.
if (c > 0 && c < 10) {
	alert('Верно');
}

let c1 = 0;  // задание 2.
if (c > 0 && c < 10) {
	alert('Неверно');
}

let c2 = 10;  // задание 2.
if (c > 0 && c < 10) {
	alert('Неверно');
}

let c3 = -3;  // задание 2.
if (c > 0 && c < 10) {
	alert('Неверно');
}


let d = 1;  // задание 3.
let e = 5;
if (d < 100 || e < 100) {
	alert('Неверно');
}


let a = '2';  // задание 4.
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


let monthNomber = 12(prompt('Введите номер месяца от 1 до 12'));  // задание 5.

switch (monthNomber) {
    case 12, 1, 2: 
        console.log("Это зима");
		break;
    case 3, 4, 5:
        console.log("Это весна");
        break;
    case 6, 7, 8:
        console.log("Это лето");
        break;
    case 9, 10, 11:
        console.log("Это осень");
		break;
    default:
		console.log('Такого месяца не существует');
		break;
}