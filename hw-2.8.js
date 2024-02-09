//const people = [         // задание 1
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// people.sort(function (a, b) {
//    if (a.age > b.age) {
//        return 1;
//    }
//    if (a.age < b.age) {
//        return -1;
//    }
//    return 0;
//});
//console.log(people);


function isPositive(element) {      // задание 2
    return element >= 0;
}
    function isMale(element) {
    return element.gender === 'male';
}
    function filter(source, rule) {
    let result = [];
    source.map(item => {
        if (rule(item)) {
            result.push(item);
        }
    });
    return result;
}
    
console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
console.log(filter(people, isMale));


const timer = (dedline) => {         // задание 3
    const current = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(current);
        console.log('30 секунд прошло')
    }, dedline * 1000)
};

timer(30);


function delayForSecond(callbak) {      // задание 4
    setTimeout(() => {
        callbak();
    }, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});


function delayForSecond2(cb) {     // задание 5
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond2(() => sayHi('Глеб Иванов'));