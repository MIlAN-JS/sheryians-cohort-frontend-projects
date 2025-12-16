let searchField = document.querySelector("#search")
let infoImg = document.querySelector("#weather-img")
let tempInfo = document.querySelector(".weather-info h1")
let dateInfo = document.querySelector(".weather-info h2");
let cityNameField = document.querySelector(".btm-img small")



let searchedCity;
let realWeatherData; 


searchField.addEventListener("keydown", function(e){
    
    if(e.key == "Enter"){
       searchedCity = e.target.value
       console.log(searchedCity)
       searchField.value = ""
        fetchData(searchedCity)
        cityNameField.innerHTML = searchedCity
        const date = new Date(); // current date
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        dateInfo.innerHTML =  days[date.getDay()];
        
    }
})






async function fetchData(city){
    let apiKey = "a25cfe86710d3df84f1682c2aeabf23f"
    try {

        let rawWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
         realWeatherData = await rawWeatherData.json()
        console.log(realWeatherData);
        tempInfo.innerHTML = Math.floor( realWeatherData.main.temp) + "<sup>°C</sup>"


       

        if(!rawWeatherData.ok){
            throw new Error(realWeatherData.message)
        }
        
    } catch (error) {
        console.log(error)
    }
}