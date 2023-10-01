function min(a, b) {   // задание 1
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(4, 8));
console.log(min(5, 6));


function even_or_odd(number) {    // задание 2
  return number % 2 === 0 ? "Число четное" : "Число нечетное"
}
console.log(even_or_odd(2));
console.log(even_or_odd(7));


function number(num) {   // задание 3.1
  return num * num
}
 
console.log(number(15));
