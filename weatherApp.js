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
        }
        let icon = $("i");
        icon.removeClass("fa-poo-storm");
        if((info.includes("snow") && info.includes("storm")) || info.includes("hail") || info.includes("ice") || info.includes("icy")){
            icon.addClass("fa-cloud-meatball");
        }else if(info.includes("snow")){
            icon.addClass("fa-snowflake");
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

    $("body").css("background-color", "pink");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            updateWeather(lat, long);
        });
    }

    function updateWeather(la, lo){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=6c8801566f1c76a01f1321935af57876`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                $("#note").fadeOut();

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
                $("#deg").html(tempC);
                updateIcon();

                //change font size if too many letters
                if(city.length + country.length > 20){
                    $("#loc").css("font-size", "50px");
                }else {
                    $("#loc").css("font-size", "80px");
                }
                $("#loc").html(city + " / " + country);
            });
    }

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

    let mode = "light";
    $("#mode").on("click", () => {
        if(mode === "light"){
            mode = "dark";
            $("#mode").css("color", "rgb(59, 59, 59)");
            $("#mode").css("background-color", "white");
            $("body").css("color", "white");
            $("body").css("background-color", "rgb(40, 40, 40)");
        }else {
            mode = "light";
            $("#mode").css("color", "white");
            $("#mode").css("background-color", "rgb(59, 59, 59)");
            $("body").css("color", "rgb(59, 59, 59)");
            $("body").css("background-color", "white");
        }
    });

});