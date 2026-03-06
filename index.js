function handleSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormEelement = document.querySelector("#search-form");
searchFormEelement.addEventListener("submit", handleSearch);
