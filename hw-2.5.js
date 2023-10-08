//function min(a, b) {   // задание 1
//  if (a < b) {
//    return a;
//  } else {
//    return b;
//  }
//}
//console.log(min(4, 8));
//console.log(min(5, 6));


//function even_or_odd(number) {    // задание 2
//  return number % 2 === 0 ? "Число четное" : "Число нечетное"
//}
//console.log(even_or_odd(2));
//console.log(even_or_odd(7));


//function func(num) {   // задание 3.1
//  return num * num
//} 
//console.log(func(15));


//function func(num) {   // задание 3.2
//	return num ** 2;
//}            


//let howOld = () =>{    // задание 4//
//let userAnswwer = prompt("Сколько вам лет");
  
//if(userAnswwer < 0){
//  alert("Вы ввели неправильное значение");
//} else if(userAnswwer <= 12){
//  alert("Привет, друг!");
//} else{
//  alert("Добро пожаловать!");
//}
//}
//howOld();


//let mult = (a, b) => {    // задание 5//
//if(isNaN(a) || isNaN(b)){
//  return "Одно или оба значения не являются числом";
//}else{
//  return a * b;
//}
//}
//console.log(mult(2, 5));


//let askNumber = () => {   // задание 6
//let askUser = Number(prompt("Введите число от 0 до 10"));
  
//if( askUser > 10){//
//  return "Нужно ввести число от 0 до 10";
//}else if(isNaN(askUser)){
//  return "Переданный параметр не является числом";
//}else{
//  let result = askUser ** 3;
//  return `${askUser} в кубе равняется ${result}`;
//  }
//}
//console.log(askNumber());


//  задание 7
//function Area(){
//  return  Math.PI * this.radius ** 2;
//}

//function Perimeter(){
//  return   2 * Math.PI * this.radius;
//}

//let circle1 = {
//  radius: 10,
//  getArea: Area,
//  getPerimeter: Perimeter,
//}

//let circle2 = {
//  radius: 20,
//  getArea: Area,
//  getPerimeter: Perimeter,
//}

//console.log(circle1.getArea());
//console.log(circle1.getPerimeter());

//console.log(circle2.getArea());
//console.log(circle2.getPerimeter());


// задание на подключение игры ыремена года 
//let number = Number(prompt('Ведите номер месяца!'));
function date() {
  let number = Number(prompt('Ведите номер месяца!'))
  if((number >= 1 && number >= 2) || number === 12){
    return "Зима";
  } else if(number >= 3 && number <= 5){
    return "Весна";
  } else if (number >= 6 && number <= 8){
    return "Лето";
  } else if (number >= 9 && number <= 11){
    return "Осень";
  } else {
    return "Такого месяца нет!";
  }
}

//alert(date(number));