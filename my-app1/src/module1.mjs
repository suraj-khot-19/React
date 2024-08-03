import xyz,{a,b,c} from './module2.mjs'
// import xyz,{x1,x2,x3} from './module2.mjs'
//for named we must define same name as declared or while exporting and importing
//!import xyz, { x1, x2, x3 } from './module2.mjs'
//!              ^^
//!SyntaxError: The requested module './module2.mjs' does not provide an export named 'x1'
//this will not work
// console.log("a:"+x1);
// console.log("b:"+x2);
// console.log("c:"+x3);
//console.log("d:"+xyz);


console.log("a:"+a);
console.log("b:"+b);
console.log("c:"+c);
console.log("d:"+xyz);