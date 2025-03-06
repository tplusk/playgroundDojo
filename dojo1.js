// function makeAlternatingArray(array) {
    //     // if the array is empty or contains only 1 item, return the original array
    //     if (array.length <= 1) {
    //         return array;
    //     }
    //     // creating a new array to store the alternate elements
    //     const alternatingArray = array.filter((element) => );
    //     // iterating over the input array and adding the alternate elements to the new array
    //     for (let i = 0; i < array.length; i += 2) {
    //         alternatingArray.push(array[i]);
    //     }
    //     return array.filter(alternatingArray);
    // }

    
// Refactored

function makeAlternatingArray(array) {
    if (array.length <= 1) return array;
    return array.filter((element, index) => index % 2 === 0);
}
// Make Alternating Array
// This function will be called with an array and should return a new array 
// containing only the alternate elements starting from index 0. If the array is 
// empty or contains only 1 item, return the original array.

console.log(makeAlternatingArray(['hey', 'hi']));
console.log(makeAlternatingArray(['a', 'b', 'c', 'd', 'e']));
console.log(makeAlternatingArray([100, 42, 99, 3, -5]));