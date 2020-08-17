$(document).ready(() => {
    let long;
    let lat;
    let tempF = 18032;
    let tempC = 10000;
    let info = "";
    let infoDis = "";
    let city = "";
    let country = "";
    let windSpeed = 0;

    //change icon based on descrip
    function updateIcon() {
        //see if it's night
        let night = false;
        let d = new Date();
        let n = d.getHours();
        if(n >= 20 || n <=4){
            night = true;
        }else{
            night = false;
        }
        let icon = $("i");
        document.querySelector("i").className = "";
        icon.addClass("fa");
        if((info.includes("snow") && info.includes("storm")) || info.includes("hail") || info.includes("ice") || info.includes("icy")){
            icon.addClass("fa-cloud-meatball");
        }else if(info.includes("snow")){
            icon.addClass("fa-snowflake");
        }else if(info.includes("fog") || info.includes("smog") || info.includes("smoke")){
            icon.addClass("fa-smog");
        }else if(info.includes("lightning") || info.includes("storm") || info.includes("thunder")){
            icon.addClass("fa-bolt");
        }else if(night && (info.includes("rain") || info.includes("sleet") || info.includes("hail"))){
            icon.addClass("fa-cloud-moon-rain");
        }else if(night && info.includes("cloud")){
            icon.addClass("fa-cloud-moon");
        }else if(night && info.includes("clear")){
            icon.addClass("fa-moon");
        }else if(info.includes("sun") && info.includes("rain")){
            icon.addClass("fa-cloud-sun-rain");
        }else if(info.includes("heavy") && info.includes("rain")){
            icon.addClass("fa-cloud-showers-heavy");
        }else if(info.includes("rain")){
            icon.addClass("fa-cloud-rain");
        }else if(windSpeed >= 20){
            icon.addClass("fa-wind");
        }else if(info.includes("sunny")){
            icon.addClass("fa-sun");
        }else if(info.includes("broken") || info.includes("scatter")){
            icon.addClass("fa-cloud-sun");
        }else if(info.includes("cloud")){
            icon.addClass("fa-cloud");
        }else if(info.includes("clear")){
            icon.addClass("fa-parachute-box");
        }else if(night){
            icon.addClass("fa-moon");
        }else{
            icon.addClass("fa-cloud-sun");
        }
    };

    //add function to submit button
    $("#submit").on("click", () => {
        let latitude = $("#latInput").val();
        let longitude = $("#longInput").val();
        if (latitude != "" && longitude != "" && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180){
            $("#loc").html(" ");
            updateWeather(latitude, longitude);
        }
    });

    function updateWeather(la, lo){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=6c8801566f1c76a01f1321935af57876`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {

                //convert kelvins to celsius
                tempC = parseInt(data.main.temp) - 273;
                tempF = Math.round((tempC * 9 / 5) + 32);

                city = data.name;
                country = data.sys.country;
                windSpeed = data.wind.speed;

                //capitalize first word of descrip
                info = data.weather[0].description;
                let a = info.substring(0, 1).toUpperCase();
                let b = info.substring(1, info.length);
                infoDis = a + b;

                //update data
                $("#info").html(infoDis);
                updateIcon();

                //change unit 
                if(units === "c"){
                    $("#deg").html(tempC);
                }else{
                    $("#deg").html(tempF);
                }

                //change font size if too many letters
                if(city != null && country != null && city.length + country.length > 20){
                    $("#loc").css("font-size", "50px");
                }else {
                    $("#loc").css("font-size", "80px");
                }
                if(country === undefined || country === null || country === "" || country === " "){
                    $("#loc").html("Not Land");
                }else{
                    $("#loc").html(city + " / " + country);
                }
            });
    }
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            updateWeather(lat, long);
        });
    }

    //change unit of temp when u click on it
    let units = "c";
    $("#temp").on("click", () => {
        if(units === "c"){
            units = "f";
            $("#deg").html(tempF);
            $("#unit").html("°F");
        }else{
            units = "c";
            $("#deg").html(tempC);
            $("#unit").html("°C");
        }
    });

    //add function to light mode/dark mode button
    let mode = "light";
    $("#mode").on("click", () => {
        if(mode === "light"){
            mode = "dark";
            $("#mode").html("Light Mode");
            $("#mode").css("color", "rgb(59, 59, 59)");
            $("#mode").css("background-color", "white");
            $("body").css("color", "white");
            $("body").css("background-color", "rgb(40, 40, 40)");
            $("#submit").css("border", "1px solid white");
            $("#submit").css("color", "white");
            $("#submit").css("background-color", "rgb(40, 40, 40)");
            $("input").css("background-color", "white");
            $("input").css("color", "black");
        }else {
            mode = "light";
            $("#mode").html("Dark Mode");
            $("#mode").css("color", "white");
            $("#mode").css("background-color", "rgb(59, 59, 59)");
            $("body").css("color", "rgb(59, 59, 59)");
            $("body").css("background-color", "white");
            $("#submit").css("border", "1px solid black");
            $("#submit").css("color", "black");
            $("#submit").css("background-color", "white");
            $("input").css("background-color", "rgb(40, 40, 40)");
            $("input").css("color", "white");
        }
    });

});