function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//The solution is to use more specific type definitions that only allow numbers to be passed to the functions.
//This prevents unexpected behavior and makes the code more robust.

console.log(add(5,3)); // 8
console.log(subtract(5,3)); //2

//This code will now throw an error if you try to pass a string instead of a number.
//For example:
//console.log(add("5",3)); //error
//console.log(subtract(5,"3")); //error