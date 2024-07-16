import './styles.css'

const inputBox = document.querySelector("#search");
const buttonSearch = document.querySelector(".searchButton");
const datePara = document.querySelector(".date");
const conditionsPara = document.querySelector(".conditions");
const temperaturePara = document.querySelector(".temperature");
const iconPara = document.querySelector(".icon");
const loader = document.querySelector("#loader");

//1. fetch weather data from API
async function getWeatherData (location) {
  try {
    const responseRaw = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=JNWXP2HZFX6KWBTRBZCZTV4VB&contentType=json`, { mode: "cors" });
    if (responseRaw.status == 200) {
        const responseData = await responseRaw.json();
        return responseData;
    }
    throw new Error(responseRaw.status);
    
  } catch (error){
    console.log(`ERROR: ${error}`);
  }
}

//2. get and process weather data from API
async function processWeatherData (location) {
  try {
  const weatherData = await getWeatherData (location);
  const {datetime: date, conditions: conditions, temp: temperature, icon:icon } = weatherData.days[0];
  const weatherObject = { date, conditions, temperature, icon };
  return weatherObject
  } catch (error){
    console.log(`ERROR: ${error}`);
  }
}

//3. display weather data in DOM
function displayWeather (weatherObject) {
  datePara.textContent = `Date: ${weatherObject.date}`;
  conditionsPara.textContent = `Conditions: ${weatherObject.conditions}`;
  temperaturePara.textContent = `Temperature: ${weatherObject.temperature}`;
  iconPara.textContent = `Icon: ${weatherObject.icon}`;
}

//4. toggle loader function 
function toggleLoader() {
  datePara.textContent = "";
  conditionsPara.textContent = "";
  temperaturePara.textContent = "";
  iconPara.textContent = "";
  loader.classList.toggle("loader")
}

//5. get user location and fetch/process API weather data
async function getAndShowWeather() {
  try {
    const searchInput = inputBox.value;
    toggleLoader();
    const weatherObject = await processWeatherData(searchInput);
    toggleLoader();
    displayWeather (weatherObject);
  } catch (error){
    console.log(`ERROR: ${error}`);
  }
}

// function getAndShowWeather() {
//   const searchInput = inputBox.value;
//   processWeatherData(searchInput)
//   .then ((weatherObject) => {
//     displayWeather (weatherObject)
//   })
// }

buttonSearch.addEventListener("click", () => {
  getAndShowWeather();
});