
const API =
  "https://api.weatherapi.com/v1/current.json?key= 5d54df1d472941c3b0475532242501 &q=London&aqi=no";

  console.log(API);
let input = document.querySelector("#inp");
let submit = document.querySelector("#submit");
let temp = document.querySelector(".temp");
let output = document.querySelector(".out");
let icon = document.querySelector(".ALL .icon #img");
let condition = document.querySelector(".cond");
let region = document.querySelector("#region");
let country = document.querySelector("#country");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day_date = new Date();
let day_name = days[day_date.getDay()];
let day = document.querySelector(".day");
let date_time = document.querySelector(".date");
let wind = document.querySelector(".wind");
async function getWeather() {
  console.log("hello");
  let child_API = `https://api.weatherapi.com/v1/current.json?key= 5d54df1d472941c3b0475532242501 &q=New Delhi&aqi=no`;
  let response = await fetch(child_API);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let location = data.location.name;
  let weather = data.current.temp_c;
  let icon_weather = data.current.condition.icon;
  let text = data.current.condition.text;
  let rgn = data.location.region;
  let count = data.location.country;
  let wnd = data.current.wind_kph;
  let time = data.location.localtime;

  console.log(location);
  console.log(weather);
  console.log(icon_weather);
  console.log(text);
  temp.innerText = `${weather}°C`;
  output.innerText = location;
  icon.src = icon_weather;
  condition.innerText = text;
  region.innerText = rgn;
  country.innerText = ` , ${count}`;
  wind.innerText = `Wind: ${wnd} kmph`;
  date_time.innerText = time;
  day.innerText = day_name;
  console.log("hii");
}
getWeather();
submit.addEventListener("click", async function (e) {
  e.preventDefault();
  let input_value = input.value;
  console.log(input_value);
  let child_API = `https://api.weatherapi.com/v1/current.json?key= 5d54df1d472941c3b0475532242501 &q=${input_value}&aqi=no`;
  let response = await fetch(child_API);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let location = data.location.name;
  let weather = data.current.temp_c;
  let icon_weather = data.current.condition.icon;
  let text = data.current.condition.text;
  let rgn = data.location.region;
  let count = data.location.country;
  let wnd = data.current.wind_kph;
  let time = data.location.localtime;
  console.log(location);
  console.log(weather);
  console.log(icon_weather);
  console.log(text);
  temp.innerText = `${weather}°C`;
  output.innerText = location;
  icon.src = icon_weather;
  condition.innerText = text;
  region.innerText = rgn;
  country.innerText = ` , ${count}`;
  wind.innerText = `Wind: ${wnd} kmph`;
  date_time.innerText = time;
  day.innerText = day_name;
});