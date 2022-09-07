// ( function(global)
// {
//     let arr =[];
//     let initalize = function()
    
//     {
//           arr = [
//                     {id:'101',name:'Rushi',email:'rushi.concerto@123',phone:'23456789'},
//                     {id:'102',name:'ashif',email:'asif.concerto@123',phone:'3456789'},
//                     {id:'103',name:'rupesh',email:'rupesh.concerto@123',phone:'456789'},
//                     {id:'101',name:'Rushi',email:'rushi.concerto@123',phone:'23456789'}
                
//                  ]    
//     }
//     initalize();
//     dispaly();
//     function dispaly()
//     {
//         for(var i = 0 ; i<arr.length ; i++)
//         {
//             console.log('Empoyee'+(i+1));
//             console.log(arr.key[i] + " = "+arr.id);
//         }
//     }
// }
// )(window)



var employee;
(function(global)
{

var Initialize = function()
{
   employee = 
   [
    {id:'101',name:'emp1',city:'Mumbai',email:'emp1@gmail.com',Phone:'12345',DateOfJoining:'2022-08-01'},
    {id:'102',name:'emp2',city:'Delhi',email:'emp2@gmail.com',Phone:'12345',DateOfJoining:'2022-08-02'},    
    {id:'103',name:'emp3',city:'Noida',email:'emp3@gmail.com',Phone:'12345',DateOfJoining:'2022-08-03'},
    {id:'104',name:'emp4',city:'Jaipur',email:'emp4@gmail.com',Phone:'12345',DateOfJoining:'2022-08-04'}
   ]
}
Initialize();
var searchEmployeeByID = function(id)
{
   //alert(id);
for(var emp of employee)
{   
if(emp.id === id)
    {
        var ids = document.getElementById('id');
        ids.innerHTML += `<h3> ID:${emp.id} </h3>`;
        ids.innerHTML += `<h3> Name:${emp.name} </h3>`;
        ids.innerHTML += `<h3> City:${emp.city} </h3>`;
        ids.innerHTML += `<h3> Email:${emp.email} </h3>`;
        ids.innerHTML += `<h3> Phone No:${emp.Phone} </h3>`;
        ids.innerHTML += `<h3> Date Of Joining:${emp.DateOfJoining} </h3>`;
    }
}
}

global.searchEmployeeByID=searchEmployeeByID;

})(window);
var submitID = function(){
var inputIDs =  document.getElementById('inputID').value;
searchEmployeeByID(inputIDs)
}