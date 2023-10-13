let arr = [1, 5, 4, 10, 0, 3];   //задание 1

for (let i = 0; i <= 3; i++) {
	console.log(arr[i]);
}


let rrr = [1, 5, 4, 10, 0, 3];   //задание 2
console.log(rrr.indexOf(4) + 1);


let ar = [1, 3, 5, 10, 20];   //задание 3
ar = ar.join(' ');
console.log(ar);


let brr = [    //задание 4
	[1, 1, 1],
	[1, 1, 1], 
	[1, 1, 1],
];
console.log(brr[0]);
console.log(brr[1]);
console.log(brr[2])


let der = [1, 1, 1];   //задание 5
der.push(2, 2, 2);
console.log(der);


let crr = [9, 8, 7, 'a', 6, 5];   //задание 6
crr = crr.sort();
crr.pop('a')
console.log(crr);


let err = [9, 8, 7, 6, 5];   //задание 7
let number = Number(prompt('Угадай число'));   
if (err) {
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
for (let subFrr of frr) {
	for (let elem of subFrr) {
		console.log(elem);
	}
}
//console.log();


let jrr = [112, 346, 1000, 1260];   //задание 11
let result = jrr.map(item => (item **2));
console.log(result);
