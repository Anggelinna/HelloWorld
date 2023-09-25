let password = "пароль";  // задание 1.
let parol = prompt("Введите пароль");

if(parol === password){
    console.log("Пароль введен верно");
}else{
    console.log("Пароль введен неправильно");
}

let c = 2;  // задание 2.
if (c > 0 && c < 10) {
	alert('Верно');
} else {
    alert('Неверно');
}

let c1 = 0;  // задание 2.
if (c1 > 0 && c1 < 10) {
	alert('Верно');
} else {
    alert('Неверно');
}

let c2 = 10;  // задание 2.
if (c2 > 0 && c2 < 10) {
	alert('Верно');
} else {
    alert('Неверно');
}

let c3 = -3;  // задание 2.
if (c3 > 0 && c3 < 10) {
	alert('Верно');
} else {
    alert('Неверно');
}


let d = 1;  // задание 3.
let e = 5;
if (d < 100 || e < 100) {
	alert('Верно');
} else {
    alert('Неверно');
}


let aa = '2';  // задание 4.
let bb = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(aa) + Number(bb));


let monthNomber = Number(prompt("Введите номер месяца от 1 до 12")); // задание 5.

switch (monthNomber) {
    case 1: 
        console.log("Это зима");
		break;
    case 2: 
        console.log("Это зима");
		break;
    case 12: 
        console.log("Это зима");
		break;
    case 3:
        console.log("Это весна");
        break;
    case 4:
        console.log("Это весна");
        break;
    case 5:
        console.log("Это весна");
        break;
    case 6:
        console.log("Это лето");
        break;
    case 7:
        console.log("Это лето");
        break;
    case 8:
        console.log("Это лето");
        break;
    case 9:
        console.log("Это осень");
		break;
    case 10:
        console.log("Это осень");
		break;
    case 11:
        console.log("Это осень");
		break;
    default:
		console.log('Такого месяца не существует');
		break;
}