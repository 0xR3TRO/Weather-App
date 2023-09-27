const apiKey = "a4b412bd546a12b98db3ad0ba089f9e0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0],main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        }
        else if(data.weather[0],main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        }
        else if(data.weather[0],main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }
        else if(data.weather[0],main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        }
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})