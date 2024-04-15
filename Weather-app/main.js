let temp = document.getElementById('temp');
let cityName = document.getElementById('city-name');
let humidityDegree = document.getElementById('humidity-degree');
let windSpeed = document.getElementById('wind-speed');

let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

async function checkWeather(userCity) {

    let apiKey = '2b2ecd4096cf0cbc139f67afb4324a00';
    let city = userCity;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then(function(result) {
        return result.json();
    })

    .then(function(data) {
        temp.textContent = Math.round(data.main.temp) + '°C';
        cityName.textContent = data.name;
        humidityDegree.textContent = data.main.humidity + '%';
        windSpeed.textContent = data.wind.speed + ' km/h';

        document.querySelector('.info > img').src = `images/${data.weather[0].main}.png`;

        document.querySelector('.info').style.display = 'block';
        document.getElementById('error-message').style.display = "none";
    })
    
    .catch(function() {
        document.querySelector('.info').style.display = 'none';
        document.getElementById('error-message').style.display = "block";
    })
}

searchButton.addEventListener('click', function() {
    checkWeather(searchInput.value);
})