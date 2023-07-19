const apiKey= "" /*write your api key here got from openweather */
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 

const searchInp=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather_icon")

async function cityControl(city) { 
    const response= await fetch(apiUrl + city +`&appid=${apiKey}`)

/* for cities not found */
    if(response.status== 404) {
        document.querySelector(".error").style.display= "block"
        document.querySelector(".weather_part").style.display= "none"
    }

    var data= await response.json()

/* to get information from data */

    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".degree").innerHTML= Math.round(data.main.temp) + "°C "
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%"
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h"

/* for icons that will change according to the weather */
    if(data.weather[0].main == "Clouds") {
         weatherIcon.scr="img/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src= "img/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
         weatherIcon.src= "img/rain.png"
        }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src= "img/drizzle.png"
        }
    else if (data.weather[0].main == "Mist") {
         weatherIcon.src= "img/mist.png"
        }
    }

searchBtn.addEventListener("click", ()=> {
        cityControl(searchInp.value)
     }) 
