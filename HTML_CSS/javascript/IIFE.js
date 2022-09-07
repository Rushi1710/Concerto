(function(global)
    {
        let cities = ['mumbai','pune'];
        var ele = document.getElementById('head');
        function dispaly()
        {
            ele.innerHTML='';
            for(let city of cities)
            ele.innerHTML += `<p>${city}</p>`
        }
        dispaly();
        function addCity(city)
        {
            cities.push(city);
            dispaly();

        }
        global.addCity = addCity;

        function removeCity(city){
            cities.splice(2,1);
            dispaly();
        }
        global.removeCity = removeCity;
    }
)(window);

setTimeout(function(){
    addCity('panvel');
},2000);
setTimeout(function(){
    removeCity('panvel');
},4000);

