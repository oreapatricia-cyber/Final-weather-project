function displayWeatherCondition(response) {
  console.log(response.data.temperature.current);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let timeElement = document.querySelector("#time");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#weather-icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;

  humidityElement.innerHTML = response.data.temperature.humidity;
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);

  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

function searchCity(city) {
  let apiKey = "94bo483a37241b0t66efb57f3864046e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${hours}:${minutes}`;
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function displayforecast() {
  let forecast = document.querySelector("#forecast");
  let days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  days.forEach(function (day) {
    forecast.innerHTML += ` <div>
            <div class="weather-forecast-day">${day}</div>
            <div class="weather-forecast-icon">🌤️</div>
            <div class="weather-forecast-temperature">18°C</div>
          </div>`;
  });
}

document.querySelector("#search-form").addEventListener("submit", handleSearch);

searchCity("Miami");
