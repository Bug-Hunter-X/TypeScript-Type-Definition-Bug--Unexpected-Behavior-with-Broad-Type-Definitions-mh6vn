function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5,3)); // 8
console.log(subtract(5,3)); //2

//The bug is that the type definitions are too broad.  The functions should be more specific.
//For example, if you were to pass a string instead of a number, it would still compile.