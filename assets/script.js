let dayOne = document.querySelector("#day-one")


fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=953f193781e1d680d421d184dd1910c7")
.then(response => response.json())
.then(citiesFound => {
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);
    
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=953f193781e1d680d421d184dd1910c7&units=imperial`)
})


.then(response => response.json())
.then(data => {
    let dayOneWeather = {
        temp: data.list[0].main.temp,
        wind: data.list[0].wind.speed,
        humidity: data.list[0].main.humidity,
    }
    console.log(data);
    console.log(dayOneWeather)
    dayOne.innerHTML = `<h5 class="card-title">Temp: ${dayOneWeather.temp}</h5>
    <h5 class="card-title">Wind: ${dayOneWeather.wind}</h5>
    <h5 class="card-title">Humidity: ${dayOneWeather.humidity}</h5>`

    })
