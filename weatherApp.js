$(document).ready(() => {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c8801566f1c76a01f1321935af57876`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                const temp = data.main.temp;
                const info = data.weather.description;
                const city = data.name;
                const country = data.sys.country;
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
            $("body").css("background-color", "rgb(20, 20, 20)");
        }else {
            mode = "light";
            $("#mode").css("color", "white");
            $("#mode").css("background-color", "rgb(59, 59, 59)");
            $("body").css("color", "rgb(59, 59, 59)");
            $("body").css("background-color", "white");
        }
    });
});