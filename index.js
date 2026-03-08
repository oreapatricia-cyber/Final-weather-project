function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let timeElement = document.querySelector("#time");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windspeedElement = document.querySelector("#wind-speed");
  windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}
function searchCity(city) {
  let apiKey = "94bo483a37241b0t66efb57f3864046e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
