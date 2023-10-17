let arr = [1, 5, 4, 10, 0, 3];   //задание 1

for (let i = 0; i <= 3; i++) {
	console.log(arr[i]);
}


let rrr = [1, 5, 4, 10, 0, 3];   //задание 2
console.log(rrr.indexOf(4) + 1);


let ar = [1, 3, 5, 10, 20];   //задание 3
ar = ar.join(' ');
console.log(ar);


let brr = [];   //задание 4
for (let i = 0; i < 3; i++) {
	brr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		brr[i].push(1); // заполняем подмассив числами
	}
}
console.log(brr);


let der = [1, 1, 1];   //задание 5
der.push(2, 2, 2);
console.log(der);


let crr = [9, 8, 7, 'a', 6, 5];   //задание 6
crr = crr.sort();
crr.pop('a')
console.log(crr);


let err = [9, 8, 7, 6, 5];   //задание 7
let number = Number(prompt('Угадай число'));
if (number == 9 || number == 8 || number == 7 || number == 6 || number == 5) {
  alert('Угадал');   
} else {
  alert('Не угадал');   
}


//задание 8
let reverse = a => a.split('') // разбиваем строку на массив символов
                    .reverse() // инвертируем порядок следования элементов в массиве
                    .join(''); // объединяем массив обратно в строку
console.log(reverse('abcdef'))


let frr = [[1, 2, 3], [4, 5, 6]];   //задание 9
console.log(frr.flat())
//for (let frrIn of frr) {
//	for (let element of frrIn) {
//		console.log(element);
//	}
//}

 
const numbers = [5, 9, 3, 7, 2, 8, 1, 6, 4, 10];   //задание 10
for (let i = 0; i < numbers.length - 1; i++) {
const sum = numbers[i] + numbers[i + 1];
console.log("Сумма", numbers[i] , "и", numbers[i + 1], "равна", sum);
}


let jrr = [112, 346, 1000, 1260];   //задание 11
let result = jrr.map(item => (item **2));
console.log(result);


let string = (['salt', '', 'mem', 'hippopotamus', 'patatoes']);  //задание 12
result = string.map(({length}) => length);
console.log(result)


let myArray = ([-1, 0, 5, -10, 56, -25, 25, 0, -1000, -2]);  //задание 13
function getNegativeNumbers(array) {
  return array.filter(function(value) {
    return value < 0;
  });
}
console.log(getNegativeNumbers(myArray));