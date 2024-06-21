const apiKey = "790a53d6d551a8f8d69086aed9033ae6";
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

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " km/h"; 
    document.querySelector(".seaLevel").innerHTML = data.main.sea_level + " km/h";
    document.querySelector(".groundLevel").innerHTML = data.main.grnd_level + " km/h";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".degree").innerHTML = data.wind.deg + " km/h";
    document.querySelector(".gust").innerHTML = data.wind.gust + " km/h";    
    document.querySelector(".description").innerHTML = data.weather[0].description; 
    document.querySelector(".visibility").innerHTML = data.visibility + " meters";
    document.querySelector(".longitude").innerHTML = data.coord.lon + " °";
    document.querySelector(".latitude").innerHTML = data.coord.lat + " °";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }


function checkWeather(data) {
    const windElement = document.querySelector(".wind");
    if (windElement) {
        if (data.rain && data.rain["1h"] !== undefined) {
            windElement.innerHTML = data.rain["1h"] + " mm/h";
        } else {
            windElement.innerHTML = "No rain data available";
        }
    }

    const visibilityElement = document.querySelector(".visibility");
    if (visibilityElement) {
        visibilityElement.innerHTML = data.visibility + " meters";
    }
}


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})