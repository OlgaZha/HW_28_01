function evenNumbers() {
let array = [1, 2, 3, 4, 5, 6];
let newArray = array.filter(item => item%2==0)
console.log(newArray)
}

function doubleNumbers() {
let array = [2, 5, 10];
let newArray = array.map(item => item*=item)
console.log(newArray)
}

function firstElement() {
let array = [2, 25, 11, 34];
let newArray = array.find(item => item > 10);
console.log(newArray)
}

function firstElement() {
let array = [2, 5, 10];
let result = array.reduce((sum, current)=> sum + current, 0)
console.log(result)
}

function duplicateElement() {
let array = [1, 2, 2, 3, 4, 4, 5];
let result = array.filter((item, index, array)=> array.indexOf(item) === index);
console.log(result)
}