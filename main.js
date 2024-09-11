//Weather API Key
const apiKey = "7900be79e0c51c9dd70a66c4446f86f9";

//Weather API URL
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//select inputbox

const inputBox = document.querySelector(".search input");
// //select input Button

const inputBtn = document.querySelector(".search button");

//select weather class

const weatherIcon = document.querySelector(".weather-icon");

//Async%Await

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    let error = document.querySelector(".error");

    error.style.display = "block";
    error.style.color = "red";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    //select city class name
    document.querySelector(".city").innerHTML = data.name;

    //select temp class
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";

    //select humidity class
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    inputBox.value = data.main.humidity + "%";

    //select wind class
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "km/h";

    //change weather image write code

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Icons/cloudy.svg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Icons/contrast.svg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Icons/cloudy(2).svg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Icons/sun-cloud.svg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Icons/fog.svg";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

inputBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
