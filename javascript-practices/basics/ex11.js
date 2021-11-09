/**
 * Array 메소드
 * 
 */

var colors = ['black','white','yellow'];
var fruits = ['apple','mango','banana'];
console.log("======================================================");
// concat
var a1 = fruits.concat(colors);
console.log(a1);
console.log("======================================================");
// pop, push: stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);
console.log("======================================================");
// join
var str = fruits.join(":");
console.log(str);
console.log("======================================================");
// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);
console.log("======================================================");
// shift
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number,numbers);
console.log("======================================================");
// sort
numbers.sort();
console.log(numbers);

console.log("======================================================");
// slice
var numbers = numbers.slice(1, 3);  //인덱스1번에서 2번까지 잘라냄
console.log(numbers)    ;
console.log("======================================================");
// splice
// index부터 count개를 삭제 후  삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0, 2); //(index,count)
console.log(fruits2, fruits);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10)//1,2,3잘라낸걸 반환후 그자리에 10 넣음 
console.log(a2, a1);
console.log("======================================================");
// a1. removeAt(1)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1) 
console.log(a2, a1);
console.log("======================================================");
// a1.insertAt(1,10)    : insertAt,removeAt이 편리하지만 프로토타입엔 없음
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10)//1자리에 0개만큼자르고 10을 삽입 (삽입만한다)
console.log(a2, a1);
