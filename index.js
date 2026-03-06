function searchCity(city) {
  let apiKey = "94bo483a37241b0t66efb57f3864046e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormEelement = document.querySelector("#search-form");
searchFormEelement.addEventListener("submit", handleSearch);
