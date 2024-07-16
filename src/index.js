import "./styles.css";

const inputBox = document.querySelector("#search");
const buttonSearch = document.querySelector(".searchButton");
const datePara = document.querySelector(".date");
const conditionsPara = document.querySelector(".conditions");
const temperaturePara = document.querySelector(".temperature");
const iconPara = document.querySelector(".icon");
const loader = document.querySelector("#loader");

//1 fetch weather data from API based on location
async function getWeatherData(location) {
  try {
    const responseRaw = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=JNWXP2HZFX6KWBTRBZCZTV4VB&contentType=json`,
      { mode: "cors" }
    );
    if (responseRaw.status == 200) {
      return responseRaw;
    }
    throw new Error(responseRaw.status);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

//2. process raw weather data into a weatherObject
async function processWeatherData(rawData) {
  try {
    const processedData = await rawData.json();
    const {
      datetime: date,
      conditions: conditions,
      temp: temperature,
      icon: icon,
    } = processedData.days[0];
    const weatherObject = { date, conditions, temperature, icon };
    console.log(weatherObject);
    return weatherObject;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

//3. display weather data in DOM
function displayWeather(weatherObject) {
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
  loader.classList.toggle("loader");
}

//5. display weather icon
function displayIcon(icon) {
  if (icon == "rain") {
    iconPara.textContent = `Icon: ${icon} 🌧️`;
  } else if (icon == "partly-cloudy-day") {
    iconPara.textContent = `Icon: ${icon} ☁️`;
  } else if (icon == "sunny") {
    iconPara.textContent = `Icon: ${icon} ☀️`;
  }
}

//5.1 combined function as event-handler (ASYNC)
async function getAndShowWeather() {
  try {
    const locationInput = inputBox.value;
    toggleLoader();
    const rawData = await getWeatherData(locationInput);
    const weatherObject = await processWeatherData(rawData);
    toggleLoader();
    displayWeather(weatherObject);
    displayIcon(weatherObject.icon);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

//5.2 combined function as event-handler (THEN)
function getAndShowWeather2() {
  const locationInput = inputBox.value;
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/today?unitGroup=metric&key=JNWXP2HZFX6KWBTRBZCZTV4VB&contentType=json`,
    { mode: "cors" }
  )
    .then((rawData) => {
      return rawData.json();
    })
    .then((processedData) => {
      const {
        datetime: date,
        conditions: conditions,
        temp: temperature,
        icon: icon,
      } = processedData.days[0];
      const weatherObject = { date, conditions, temperature, icon };
      return weatherObject;
    })
    .then((weatherObject) => {
      displayWeather(weatherObject);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
}

//6. attach event handler
buttonSearch.addEventListener("click", () => {
  getAndShowWeather();
  // getAndShowWeather2 ();
});
