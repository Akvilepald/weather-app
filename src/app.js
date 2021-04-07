let now = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[now.getDay()];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthName[now.getMonth()];
let fullDate = `${(now.getHours())}:${(now.getMinutes())}, ${day} ${(now.getDate())} ${month}`;
console.log(fullDate);
let dateElement = document.querySelector(".today-date");
dateElement.innerHTML = `${fullDate}`;



function displayTemperature(response) {
console.log(response);
let temperatureElement = document.querySelector("#degrees");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector(".description");
let humidityElement = document.querySelector(".humidity-percent");
let windElement = document.querySelector(".wind-speed");
let mainIconElement = document.querySelector("#icon")

temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = `${response.data.main.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed} m/s`;
mainIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

let apiKey = "175ad63a7fc75a67f734a3105255cb29";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);