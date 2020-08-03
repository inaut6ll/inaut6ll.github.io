$(document).ready(() => {
    let long;
    let lat;
    let tempF = 0;
    let tempC = 0;
    let info = "";
    let city = "";
    let country = "";

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=70&lon=37&appid=6c8801566f1c76a01f1321935af57876`;
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    tempC = parseInt(data.main.temp) - 273;
                    tempF = Math.round((tempC * 9 / 5) + 32);
                    info = data.weather[0].description;
                    let a = info.substring(0, 1).toUpperCase();
                    let b = info.substring(1, info.length);
                    info = a + b;
                    city = data.name;
                    country = data.sys.country;

                    console.log(temp);
                    console.log(info);
                    console.log(city);
                    console.log(country);
                    $("#info").html(info);
                    $("#deg").html(tempC);

                    if(city.length + country.length > 20){
                        $("#loc").css("font-size", "50px");
                    }else {
                        $("#loc").css("font-size", "80px");
                    }
                    $("#loc").html(city + " / " + country);
                });
        });
    } else{
        $("body").html("Please allow access to location.");
    }

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