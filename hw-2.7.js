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


