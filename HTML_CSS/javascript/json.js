// var employee ={name:"Rushikesh",city:"mumbai"}
// console.log(employee.city);
// console.log(employee['name'])
// var key = 'name';
// console.log(employee[key])
// employee.name='asif';
// console.log(employee);
// employee.phone = '23241663';
// console.log(employee);
var emp = [
    {name:'rushi',city:'Mumbai'},
    {name:'rupesh',city:'pune'},
];
var keys = Object.keys(employee)
console.log(keys)
for(let i = 0 ; i<emp.length;i++)
{
    console.log('Empoyee'+(i+1));
    var emp = emps[i];
    for(let key of keys){
        console.log(key,emp[key])
    }
}