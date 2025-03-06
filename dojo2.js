const fruits = ['apple', 'lemon', 'banana', 'strawberry', 'BaNAnA', 'kiwi']

function findMore(fruits) {    
    const matches = /banana/gi.test(fruits);
    // console.log(fruits.indexOf('banana'));
    return matches;
}
console.log(findMore(fruits));
// console.log(fruits[-1]);
// console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[5]);