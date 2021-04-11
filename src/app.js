
let now = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[now.getDay()];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthName[now.getMonth()];
let fullDate = `${(now.getHours())}:${(now.getMinutes())}, ${day} ${(now.getDate())} ${month}`;
console.log(fullDate);
let dateElement = document.querySelector(".today-date");
dateElement.innerHTML = `${fullDate}`;

function getForecast(coordinates) {
    console.log(coordinates)
        let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    console.log(forecastApiUrl);
        axios.get(forecastApiUrl).then(displayForecast);

}

function displayForecast(response) {
console.log(response);
}

function displayForecast(response) {
    console.log(response.data.daily)
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="row">`;
    let days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    days.forEach(function(day) {
    forecastHTML =  forecastHTML + 
    `
                <div class="col-2" id="forecast">
                    <div id="forecast-day">
                        ${day}
                    </div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="forecast-icon" id="forecast-icon" width="45px" />
                    <div id="forecast-temperature">
                        <span class="forecast-max">10°</span>
                        <span class="forecast-min">5°</span>
                    </div>
                </div>
                `;
    });
    
     forecastHTML = forecastHTML + `</div>`;
        forecastElement.innerHTML = forecastHTML;
};


let temperatureElement = document.querySelector("#degrees"); 
let apiKey = "175ad63a7fc75a67f734a3105255cb29";

function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "175ad63a7fc75a67f734a3105255cb29";
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(locationApiUrl).then(displayTemperature);
}

function getCurrentPosition() {
navigator.geolocation.getCurrentPosition(getPosition);
}

let currentPositionButton = document.querySelector("#location-button");
currentPositionButton.addEventListener("click", getCurrentPosition);


function city(city) {
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
}


function displayTemperature(response) {
console.log(response);

let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector(".description");
let humidityElement = document.querySelector(".humidity-percent");
let windElement = document.querySelector(".wind-speed");
let mainIconElement = document.querySelector("#icon")

celsiusTemp = Math.round(response.data.main.temp);
temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = `${response.data.main.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed} m/s`;
mainIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

getForecast(response.data.coord)
};


function showFahrenheit(event) {
    event.preventDefault();
let fahrenheit = Math.round(celsiusTemp*1.8+32);
temperatureElement.innerHTML = `${fahrenheit}°F`;
}

function showCelsius(event) {
    event.preventDefault();
    temperatureElement.innerHTML = `${celsiusTemp}°C`;
}

let celsiusTemp = null;

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-input");
  city(cityInputElement.value);
}

city("edinburgh");

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", handleSubmit);


let fahrenheitOption = document.querySelector(".fahrenheit-option");
fahrenheitOption.addEventListener("click", showFahrenheit)

let celsiusOption = document.querySelector(".celsius-option");
celsiusOption.addEventListener("click", showCelsius);