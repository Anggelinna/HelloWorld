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


let friday = 5;   // задание 6
for(let i = friday; i <=31; i+=7){
   console.log(`Сегодня пятница ${i}-е число.Необходимо подготовить отчет.`);
}