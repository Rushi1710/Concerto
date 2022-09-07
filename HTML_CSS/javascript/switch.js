// var a = prompt('enter a character');
// var c;
// // var a1 = 10;
// // var b1 = 20;
// switch(a)
// {
    
//     case '+': 
//     var a1 =prompt('enter a number 1'); 
//     var b1 =prompt('enter a number 2'); 
//     c =a1 + b1;
//     document.write(`<h3>Addition : ${c}</h3>`);
//     break;

//     case '-' :  var a1 =prompt('enter a number 1'); 
//     var b1 =prompt('enter a number 2'); 
//     c = a1 - b1;
//     document.write(`<h3>Subtraction : ${c}</h3>`);
//     break;

//     case '/' : var a1 =prompt('enter a number 1'); 
//     var b1 =prompt('enter a number 2'); 
//      c = a1/b1;
//     document.write(`<h3>Divsion : ${c}</h3>`);
//     break;

//     case '*' : var a1 =prompt('enter a number 1'); 
//     var b1 =prompt('enter a number 2'); 
//      c = a1/b1;
//     document.write(`<h3>Multiplication : ${c}</h3>`);
//     break;
// }

// let a = prompt("enter a number");

let d1 = prompt(Math.floor(Math.random()*6)+1);
let d2 = promt(Math.floor(Math.random()*6)+1)
document.write(`result ${d1}`)
 let count = d1 + d2 ;
 if(count < 7)
 {
    document.write(`<h1> result : ${count}</h1>`)
    document.write(`<h1> won </h1>`)
 }
 else if(count > 7)
 {
    document.write(`<h1> result : ${count}</h1>`)
    document.write(`<h1> loss </h1>`)
 }
 else if(count == 7)
 {
    document.write(`<h1> result : ${count}</h1>`)
    document.write(`<h1> loss </h1>`)
 }






