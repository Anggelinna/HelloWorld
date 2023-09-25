let i = 1;   // задание 1 
while (i <= 2) { 
  alert('Привет');
  i++;
}

let m = 1;   // задание 2
let n = 5;  
// на каждой итерации i увеличивается на 1
while (m <= n) {
    console.log(m);
    m += 1;
}

let v = 7;   // задание 3
let l = 22;  
while (v <= l) {
    console.log(v);
    v += 1;
}

const obj = {   // задание 4
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
    };
    for (const key in obj) {
    alert(key + ' - зарплата' + obj[key] + 'долларов');
}


for (let n = 1000, num = 0; n > 50; num++) {   // задание 5
    n /= 2;
    alert(n);
}


let day = prompt('Введите число от 1 до 31');   // задание 6
if (day == 1) {
alert('Понедельник');
} else if (day == 2) {
alert('Вторнк');
} else if (day == 3) {
alert('Среда');
} else if (day == 4) {
alert('Четверг');
} else if (day == 5) {
alert('Сегодня пятница, 5 число. Необходимо подготовить отчет');
} else if (day == 6) {
alert('Суббота');
} else if (day == 7) {
alert('Воскресенье');
} else if (day == 8) {
alert('Вторнк');
} else if (day == 9) {
alert('Среда');
} else if (day == 10) {
alert('Четверг');
} else if (day == 11) {
alert('Сегодня пятница, 11 число. Необходимо подготовить отчет');
} else if (day == 12) {
alert('Суббота');
} else if (day == 13) {
alert('Воскресенье');   
} else if (day == 14) {
alert('Вторнк');
} else if (day == 15) {
alert('Среда');
} else if (day == 16) {
alert('Четверг');
} else if (day == 17) {
alert('Сегодня пятница, 17 число. Необходимо подготовить отчет');
} else if (day == 18) {
alert('Суббота');
} else if (day == 19) {
alert('Воскресенье');
} else if (day == 20) {
alert('Вторнк');
} else if (day == 21) {
alert('Среда');
} else if (day == 22) {
alert('Четверг');
} else if (day == 23) {
alert('Сегодня пятница, 23 число. Необходимо подготовить отчет');
} else if (day == 24) {
alert('Суббота');
} else if (day == 25) {
alert('Воскресенье');
} else if (day == 26) {
alert('Вторнк');
} else if (day == 27) {
alert('Среда');
} else if (day == 28) {
alert('Четверг');
} else if (day == 29) {
alert('Сегодня пятница, 29 число. Необходимо подготовить отчет');
} else if (day == 30) {
alert('Суббота');
} else if (day == 31) {
alert('Воскресенье');
}          