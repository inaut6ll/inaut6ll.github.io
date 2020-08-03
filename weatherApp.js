$(document).ready(() => {
    let long;
    let lat;
    let api;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c8801566f1c76a01f1321935af57876`;
        });

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    } else{
        $("body").html("Please allow access to location.");
    }
});