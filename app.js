function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dataElement = document.querySelector("#data");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(reponse.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.wind.speed);
  dataElement.innerHTML = FormData(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "55ee7f54993429e7c2d9a48aa2b4d61b";
let city = "New York City";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
