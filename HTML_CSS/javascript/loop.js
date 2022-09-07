
for(var cous = 1; cous <= 3 ; cous++)
{   var sum = 0;
    var a = prompt('Enter name ')
    document.write(`<h1> NAME : ${a}</h1>`)
    for(var item = 1; item <= 2; item++)
    {
    
   var q = prompt('enter a Quntity');
   var p = prompt('enter a price');
   var total = q * p;
   document.write(`<h1>P${item} total : ${total} </h1>`);
   
   sum = sum + total;
    }
    document.write(`<h1> All Product total : ${sum}</h1>`);
    document.write(`<h1>---------------------</h1>`)
}

