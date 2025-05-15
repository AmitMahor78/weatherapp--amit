var cityName = document.querySelector("#inp");
        let h2 = document.querySelector(".heading");
        cityName.addEventListener("keypress", (e) => {
            if (cityName.value != '' && e.key === "Enter") {
                getWeather(cityName.value);
                h2.style.display = "list-item";
                h2.style.listStyle = "none";
                 
                
            }
        })
        function getWeather(value) {
            const API = "fbefb2304db4ae6cdd9a43218a90d252";
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (Weather) {
                    console.log(Weather);
                    document.querySelector("#city").innerHTML ="City : "+ Weather.name + ", " + Weather.sys.country;
                    let kelvin =  Weather.main.temp - 273.15; // Convert from Kelvin to Celsius
                    document.querySelector("#tem").innerHTML ="Temprature : "+ Math.round(kelvin) + "°C";
                    let speed = Weather.wind.speed;
                    document.querySelector("#sp").innerHTML ="Wind Speed : "+ speed;
                    let timezone = Weather.timezone;
                    document.querySelector("#timezone").innerHTML = "Time Zone : "+ timezone;
                });
        };
