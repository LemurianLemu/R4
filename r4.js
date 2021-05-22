function getweather(){
    var num = document.getElementById('table').getElementsByTagName('tr').length
    var city =  document.getElementById('search').value;
    var units = document.getElementById('units').value
    fetch('http://api.weatherstack.com/current?access_key=4d253686fb6ffd4db88018125a61fbc0&query='+city+'&units='+units)
    .then(a => a.json())
    .then(response =>{
        
        document.getElementById('tbody').innerHTML+=
        '<tr><td data-label="City">'+city+'</td>'+
        '<td data-label="Description">'+response.current.weather_descriptions[0]+'</td>'+
        '<td data-label="Temperature">'+response.current.temperature+' °'+units+'</td>'+
        '<td data-label="Feels-Like">'+response.current.feelslike+' °'+units+'</td>'+
        '<td data-label="UV Index">'+response.current.uv_index+'</td>'+
        '<td data-label="Humidity">'+response.current.humidity+'</td></tr>'
    })
    
    if(num%2 == 0){
        document.getElementsByTagName('tr').style.background = 'blue'
    }
}

function countTr(){

    var num = document.getElementById('table').getElementsByTagName('tr').length

    console.log(num)
    return num;
}