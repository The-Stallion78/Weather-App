
/* originalLink = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const apiURL =  "https://api.openweathermap.org/data/2.5/weather?q=abbottabad&appid=f022989a20c8e80fd5a20f49934bea0b&units=metric";

youtuber's apiKey = "863242cfb2b1d357e6093d9a4df19a4b"; */

/* const apiKey = "f022989a20c8e80fd5a20f49934bea0b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
console.log ("Fetching Weather Data...")

async function checkWeather (city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

    response = await fetch (apiURL + city+ `&appid=${apiKey}`);
    let data = await response.json();

    console.log ("API data: ", data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



} catch (error) {
    console.error ("Fetch error: ", error);
}
}


searchBtn.addEventListener ("click", ()=> {
    checkWeather (searchBox.value);
})

*/

const apiKey = "f022989a20c8e80fd5a20f49934bea0b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


console.log("Fetching Weather Data...");
async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // IF condition for updating weather images as per the data fetched from api
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        //console.log(data);
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    } catch (error) {
        console.error("Fetch error: ", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
















