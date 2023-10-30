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
