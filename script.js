const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "b358d464805d6ee7abe458b70cf5b745"
};

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
  if (e.key === "Enter") {
    getInfo(input.value);
  }
}

async function getInfo (data) {
const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
const result = await res.json();
displayResult(result);
}

function displayResult(result) {
  let city = document.querySelector("#city");
  city.textContent = `${result.name}, ${result.sys.country}`;

  getOurDate();

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

  let conditions = document.querySelector("#conditions");
  conditions.textContent = `${result.weather[0].main}`;

  let variation = document.querySelector("#variation");
  variation.innerHTML = `Min: ${Math.round(result.main.temp_min)} <span>°</span> Max: ${Math.round(result.main.temp_max)} <span>°</span>`;

}

function getOurDate() {
  const myDate = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date = document.querySelector("#date");
  date.textContent = `${days[myDate.getDay()]} ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}`;
}

getInfo("Minsk, by");