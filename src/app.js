let now = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[now.getDay()];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthName[now.getMonth()];
let fullDate = `${(now.getHours())}:${(now.getMinutes())}, ${day} ${(now.getDate())} ${month}`;
console.log(fullDate);
let dateElement = document.querySelector(".today-date");
dateElement.innerHTML = `${fullDate}`;


let apiKey = "175ad63a7fc75a67f734a3105255cb29";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=${apiKey}&units=metric`;
console.log(apiUrl);

function displayTemperature(response) {
console.log(response);
let temperatureElement = document.querySelector("#degrees");
temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;
let descriptionElement = document.querySelector(".description");
descriptionElement.innerHTML = response.data.weather[0].main;
let humidityElement = document.querySelector(".humidity-percent");
humidityElement.innerHTML = `${response.data.main.humidity}%`;
let windElement = document.querySelector(".wind-speed");
windElement.innerHTML = `${response.data.wind.speed} m/s`
}

axios.get(apiUrl).then(displayTemperature);