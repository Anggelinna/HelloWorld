let i = 1;   // задание 1 
while (i <= 2) { 
  alert('Привет');
  i++;
}

let m = 1;   // задание 2
let nn = 5;  
// на каждой итерации i увеличивается на 1
while (m <= nn) {
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
    alert(key + ' - зарплата ' + obj[key] + ' долларов');
}


let n = 1000, num = 0;  // задание 5
do { n = n / 2; num++ } 
while (n > 50) {
    alert("num:" + n +  "Iterators" +num);
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
alert('Понедельник');
} else if (day == 9) {
alert('Вторнк');
} else if (day == 10) {
alert('Среда');
} else if (day == 11) {
alert('Четверг');
} else if (day == 12) {
alert('Сегодня пятница, 12 число. Необходимо подготовить отчет');
} else if (day == 13) {
alert('Суббота');
} else if (day == 14) {
alert('Воскресенье');
} else if (day == 15) {
alert('Понедельник');
} else if (day == 16) {
alert('Вторнк');
} else if (day == 17) {
alert('Среда');
} else if (day == 18) {
alert('Четверг');
} else if (day == 19) {
alert('Сегодня пятница, 19 число. Необходимо подготовить отчет');
} else if (day == 20) {
alert('Суббота');
} else if (day == 21) {
alert('Воскресенье');
} else if (day == 22) {
alert('Понедельник');
} else if (day == 23) {
alert('Вторнк');
} else if (day == 24) {
alert('Среда');
} else if (day == 25) {
alert('Четверг');
} else if (day == 26) {
alert('Сегодня пятница, 26 число. Необходимо подготовить отчет');
} else if (day == 27) {
alert('Суббота');
} else if (day == 28) {
alert('Воскресенье');
} else if (day == 29) {
alert('Понедельник');
} else if (day == 30) {
alert('Вторнк');
} else if (day == 31) {
alert('Среда');
}