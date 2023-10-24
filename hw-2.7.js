console.log("js".toUpperCase());   //задание 1


function searchKapitans(arr, str) {   //задание 2
    return arr.filter(el => el.toLowerCase().startsWith(str));
}
console.log(searchKapitans([`Саске Учиха`, `Обито Учиха`, `Итачи Учиха`, `Хатаке Какаши`, `Мадара Учиха`], `хатаке`));


console.log(Math.floor(32.58884));   //задание 3
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


const numbers = [52, 53, 49, 77, 21, 32];   //задание 4
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);


let randNum =  Math.floor(Math.random() * 10) + 1;   //задание 5
console.log(randNum);


const getRandomBrrNumbers = (num) =>{  //задание 6
    const brr = [];
    let item = Math.round(num / 2);
   
    for(let i = 0; i < item; i++) {
        brr.push(Math.round(Math.random() * num))
        
    }
    return brr;
}
console.log(getRandomBrrNumbers(8));


function getRandomInt(minValue, maxValue) {   //задание 7
    return Math.round(Math.random() * (maxValue - minValue)) + minValue
}   
console.log(getRandomInt(10, 50));


let now = new Date();   //задание 8
console.log( now );


let dateNow = new Date();  //задание 9
dateNow.setDate(dateNow.getDate() + 73);
console.log(dateNow);


let ten = (currentDate) => {  //задание 10
    let zero = (n) => {
        if (n < 10) {
           return '0' + n
        }
        return n;
    };
    //const currentDate = new Date()
    //console.log( zero(currentDate.getDate()) )
    let date = zero(currentDate.getDate());
    if (date < 10) {
       date = "0" + date;
    };

    let months = ["января", "феврвля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    let month = months[currentDate.getMonth()];

    let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    let day = days[currentDate.getDate()];

    let hours = currentDate.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    };

    let min = currentDate.getMinutes();
    if (min < 10) {
        min = "0" + min;
    };

    let sec = currentDate.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    };
    console.log(`Дата: ${date}.${month}.${currentDate.getFullYear()} - это ${date}.`);
    console.log(`Время: ${hours}:${min}:${sec}`);
}
ten(new Date (prompt (`Введите год`), prompt(`Ведите номер месяца`), prompt(`Введите день месяца`), prompt(`Введите час`), prompt(`Введите минуты`), prompt(`Введите секунды`)))
ten(currentDate = new Date);


//задание 11
let gameArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
gameArr = gameArr.sort(() => Math.random() - 0.5);
alert(gameArr);

let ansver = prompt('Чему равнялся первый элемент массива?');
let ansver1 = prompt('Чему равнялся последний элемент массива?');

if (ansver.toLowerCase() == gameArr[0].toLowerCase() && ansver1.toLowerCase() == gameArr[6].toLowerCase()) {
    alert('Поздравляем! Вы угадали все верно.');
} else if (ansver.toLowerCase() !== gameArr[0].toLowerCase() && ansver1.toLowerCase() !== gameArr[6].toLowerCase()) {
    alert('Вы не угадали.');
} else {
    alert('Вы были близки к победе!');
}
