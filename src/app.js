
let now = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[now.getDay()];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthName[now.getMonth()];
let fullDate = `${(now.getHours())}:${(now.getMinutes())}, ${day} ${(now.getDate())} ${month}`;
console.log(fullDate);
let dateElement = document.querySelector(".today-date");
dateElement.innerHTML = `${fullDate}`;

let city = document.querySelector("input");



function getCity(event) {
event.preventDefault();
let apiKey = "175ad63a7fc75a67f734a3105255cb29";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
}

let temperatureElement = document.querySelector("#degrees"); 


function displayTemperature(response) {
console.log(response);

let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector(".description");
let humidityElement = document.querySelector(".humidity-percent");
let windElement = document.querySelector(".wind-speed");
let mainIconElement = document.querySelector("#icon")

celsiusTemp = Math.round(response.data.main.temp);
temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = `${response.data.main.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed} m/s`;
mainIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}


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

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", getCity);

let fahrenheitOption = document.querySelector(".fahrenheit-option");
fahrenheitOption.addEventListener("click", showFahrenheit)

let celsiusOption = document.querySelector(".celsius-option");
celsiusOption.addEventListener("click", showCelsius);