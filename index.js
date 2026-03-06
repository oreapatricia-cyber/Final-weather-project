function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement = searchInput.ariaValueMax;
}

let searchFormEelement = document.querySelector("#search-form");
searchFormEelement.addEventListener("submit", handleSearch);
