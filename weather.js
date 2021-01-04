const apikey = "225e54b0c0571f62052d636d7cb1cc05"
const city = "london";
/*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then(res=>{
 
res.json().then(data=>{
   console.log(data)
})
})*/
let btn = document.getElementById('button');
let message = document.getElementById('message');
let locat=document.getElementById('location');
btn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`).then(res => {
        res.json().then(data => {
            console.log(data);
            let showbox = document.getElementById('grid-container');
            message.innerHTML = `${data.weather[0].description}`
            locat.innerHTML=`${input}`
            showbox.innerHTML = `<div class="grid-item border">
    <h2>TEMPERATURE</h2>
    <img src="./images//temp.png" alt="temp" class="param-logo">
    <h3>Temperature:${data.main.temp} K</h3>
    <h3>MIN-Temperature:${data.main.temp_min} K</h3>
    <h3>MAX-Temperature:${data.main.temp_max} K</h3>
    <h3>FEELS LIKE:${data.main.feels_like}</h3>
</div>
<div class="grid-item border">
<h2>WIND SPEED</h2>
    <img src="./images/wind.jfif" alt="wind" class="param-logo">
    <h3>Wind-speed:${data.wind.speed} m/s</h3>
    <h3>Wind-speed:${data.wind.deg} deg</h3>
</div>
<div class="grid-item border">
<h2>RAIN</h2>
    <img src="./images/raining.jfif" alt="rain" class="param-logo">
    <h3>Rain chances:${data.rain} %</h3>
</div>
<div class="grid-item border">
<h2>PRESSURE</h2>
    <img src="./images/presuure.png" alt="pressure" class="param-logo">
    <h3>Air pressure:${data.main.pressure} hPa</h3>
</div>
<div class="grid-item border">
<h2>HUMIDITY</h2>
    <img src="./images/humidity.png" alt="humidity" class="param-logo">
    <h3>Humidity:${data.main.humidity} %</h3>
</div>
<div class="grid-item border">
<h2>CLOUDS</h2>
    <img src="./images/cloud.jfif" alt="cloud" class="param-logo">
    <h3>Cloud in the sky:${data.clouds.all}%</h3>
</div>
<div class="grid-item border">
<h2>VISIBILITY</h2>
    <img src="./images/visibilety.jfif" alt="visibilty" class="param-logo">
    <h3>Visibility:${data.visibility} m</h3>
</div>`
        })
    })
    console.log('hello', input)
})