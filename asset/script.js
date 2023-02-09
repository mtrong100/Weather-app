const API_KEY = "9d1c531664cb840a9be2eb7d497e0040";
const searchBox = document.querySelector("#search");
const searchWrapper = document.querySelector(".search-box");

const cityName = document.querySelector(".city-name");
const weatherDesc = document.querySelector(".weather-desc");
const temperature = document.querySelector(".weather-temp");
const wind = document.querySelector(".wind-value");
const humidity = document.querySelector(".humidity-value");
const weatherImg = document.querySelector(".weather-img img");

searchBox.addEventListener("change", getWeather);
async function getWeather(e) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}&lang=vi&units=metric`
  );
  const data = await res.json();

  cityName.innerHTML = data.name;
  weatherDesc.innerHTML = "Thời tiết: " + data.weather[0].description;
  wind.innerHTML = `${data.wind.speed}km/h`;
  humidity.innerHTML = `${data.main.humidity}%`;
  temperature.innerHTML = Math.floor(data.main.temp) + "°C";
  weatherImg.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  console.log(data);
}

searchBox.addEventListener("keydown", function (e) {
  if (e.target.value) {
    searchWrapper.style.borderColor = "#6a5af9";
  } else {
    searchWrapper.style.borderColor = "#eee";
  }
});
