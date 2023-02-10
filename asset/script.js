const API_KEY = "9d1c531664cb840a9be2eb7d497e0040";
const searchBox = document.querySelector("#search");
const searchWrapper = document.querySelector(".search-box");

const cityName = document.querySelector(".city-name");
const weatherDesc = document.querySelector(".weather-desc");
const temperature = document.querySelector(".weather-temp");
const wind = document.querySelector(".wind-value");
const humidity = document.querySelector(".humidity-value");
const weatherImg = document.querySelector(".weather-img img");

const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");

/* get data from api */
searchBox.addEventListener("change", getWeather);
async function getWeather(e) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value.trim()}&appid=${API_KEY}&lang=vi&units=metric`
    );
    const data = await res.json();
    weatherData(data);
    console.log(data);
  } catch (err) {
    showToast();
    cityName.innerHTML =
      "Dell phải do thằng code ngu mà do API củ chuối, ko gọi dc data của các tình thành Việt Nam";
    cityName.style.color = "red";
  }
}

/* display your current place */
async function display() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=10.75&lon=106.6667&appid=${API_KEY}&lang=vi&units=metric`
  );
  const data = await res.json();
  weatherData(data);
  console.log(data);
}
display();

/* render data from api */
function weatherData(data) {
  cityName.innerHTML = data.name;
  weatherDesc.innerHTML = "Thời tiết: " + data.weather[0].description;
  wind.innerHTML = `${data.wind.speed}km/h`;
  humidity.innerHTML = `${data.main.humidity}%`;
  temperature.innerHTML = Math.floor(data.main.temp) + "°C";
  weatherImg.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
}

/* some style shit */
searchBox.addEventListener("keydown", function (e) {
  if (e.target.value) {
    searchWrapper.style.borderColor = "#6a5af9";
  } else {
    searchWrapper.style.borderColor = "#eee";
  }
});

/* show toast when catch error from sever */
function showToast() {
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
}
