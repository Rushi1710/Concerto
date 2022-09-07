// var greet = () => console.log('greeted')
// greet();

// var greet = (name) => console.log('Greeted '+name)
// greet("rushi");


// function cal(nos,func){
//     for (const n of nos) {
//         console.log(func(n))
//     }
// }

// cal([1,2,3,4,7],n => n*n);

var colors =['red','blue','green','pink'];
colors.forEach(color => console.log(color.toUpperCase()));
console.log(colors);


var c1 = colors.map((c2,i) => i+" : "+ c2.toUpperCase())
console.log(c1);
console.log(colors);

console.log(colors.filter(d1 => d1.startsWith('b'))) // finding element stared with b, its case sensitive

var nos = [1,2,3,3,4,2,];
var total = nos.reduce((a,b) =>{
    a+b;
    console.log(a,b),10
} )