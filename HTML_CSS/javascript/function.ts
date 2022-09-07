// function add(a:number , b:number):number
// {
//     return a+b;
// }
// console.log(add(1,6));


// function add(a:number,b:number):number{
//     return a+b;
// }

// function reverse<T>(items:T[]): T[]{
// var tore:T[] =[];
// for(let i = items.length-1;i>=0;i--){
//     tore.push(items[i]);
// }
// return tore;
// }
// console.log(reverse([1,2,3,4,5]));
// console.log(reverse<string>(['Mumbai','Delhi','UP']))

interface employee{
    id:number;
    ename:string;
    phone?:string;
}
function display1(data:employee)
{
    console.log(data.id)
    console.log(data.ename)
}
display1({id:1,ename:'trtrtrt',phone:''});
display1({id:2,ename:'trttrr'})