document.addEventListener("DOMContentLoaded", () => {
    
    //make cover disappear after animation ends
    setTimeout(() => {
        document.querySelector("#cover").style.display = "none";
    }, 4100);
    

    //contact
    document.querySelector("#contact-btn").addEventListener("click", (e) => {
        document.querySelector("#c3").className = "circle-hover";
        document.querySelector("#contact3").style.display = "grid";
        a.style.borderColor = "rgb(134, 173, 255)";
    });


    //onclick functions for circles
    let elements = [...document.querySelectorAll(".circle")];
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            let a = e.target;
            let email = document.querySelector("#email");
            let linkedin = document.querySelector("#linkedin");
            let github = document.querySelector("#github");
            let question = document.querySelector("#question");
            if (a.className == "circle-hover"){
                a.className = "circle";
                if (a.id == "c2") {
                    a.style.borderColor = "black";
                    document.querySelector("#contact2").style.display = "none";
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato";
                    document.querySelector("#contact3").style.display = "none";
                } else{
                    a.style.borderColor = "black";
                }
            } else if (a.className.includes("circle")){
                a.className = "circle-hover";
                if (a.id == "c2") {
                    a.style.borderColor = "tomato";
                    document.querySelector("#contact2").style.display = "flex";
                } else if (a.id == "c3") {
                    a.style.borderColor = "rgb(134, 173, 255)";
                    document.querySelector("#contact3").style.display = "grid";
                } else {
                    a.style.borderColor = "black";
                }
            }
        });
    });

    //add functionality to weather image 
    document.querySelector("#weather-hover").addEventListener("click", () => {
        window.open("https://lilianzlettuce.github.io/weather", "_blank");
    });

    //add functionality to weather right arrow
    let currentWeatherDot = 1;
    document.querySelector("#weather-icon").addEventListener("click", () => {
        let dot1 = document.querySelector("#weather-dot1");
        let dot2 = document.querySelector("#weather-dot2");
        let dot3 = document.querySelector("#weather-dot3");
        let pic2 = document.querySelector("#weather2");
        let pic3 = document.querySelector("#weather3");
        if(currentWeatherDot === 1){
            currentWeatherDot = 2;
            dot1.style.backgroundColor = "white";
            dot1.style.border = "1px solid black";
            dot2.style.backgroundColor = "rgb(71, 166, 255)";
            dot2.style.border = "none";
            pic2.style.opacity = "100%";
        } else if(currentWeatherDot === 2){
            currentWeatherDot = 3;
            dot2.style.backgroundColor = "white";
            dot2.style.border = "1px solid black";
            dot3.style.backgroundColor = "rgb(71, 166, 255)";
            dot3.style.border = "none";
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else{
            currentWeatherDot = 1;
            dot3.style.backgroundColor = "white";
            dot3.style.border = "1px solid black";
            dot1.style.backgroundColor = "rgb(71, 166, 255)";
            dot1.style.border = "none";
            pic3.style.opacity = "0%";
        }
    });

    //add functionality to 2048 image 
    document.querySelector("#two-hover").addEventListener("click", () => {
        window.open("https://lilianzlettuce.github.io/2048", "_blank");
    });

    //add functionality to 2048 right arrow
    let currentTwoDot = 1;
    document.querySelector("#two-icon").addEventListener("click", () => {
        let dot1 = document.querySelector("#two-dot1");
        let dot2 = document.querySelector("#two-dot2");
        let dot3 = document.querySelector("#two-dot3");
        let pic2 = document.querySelector("#two2");
        let pic3 = document.querySelector("#two3");
        if(currentTwoDot === 1){
            currentTwoDot = 2;
            dot1.style.backgroundColor = "white";
            dot1.style.border = "1px solid black";
            dot2.style.backgroundColor = "orange";
            dot2.style.border = "none";
            pic2.style.opacity = "100%";
        } else if(currentTwoDot === 2){
            currentTwoDot = 3;
            dot2.style.backgroundColor = "white";
            dot2.style.border = "1px solid black";
            dot3.style.backgroundColor = "orange";
            dot3.style.border = "none";
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else{
            currentTwoDot = 1;
            dot3.style.backgroundColor = "white";
            dot3.style.border = "1px solid black";
            dot1.style.backgroundColor = "orange";
            dot1.style.border = "none";
            pic3.style.opacity = "0%";
        }
    });

    //add functionality to tetris image 
    document.querySelector("#tetris-hover").addEventListener("click", () => {
        window.open("https://lilianzlettuce.github.io/tetris", "_blank");
    });

    //add functionality to tetris right arrow
    let currenttetrisDot = 1;
    document.querySelector("#tetris-icon").addEventListener("click", () => {
        let dot1 = document.querySelector("#tetris-dot1");
        let dot2 = document.querySelector("#tetris-dot2");
        let dot3 = document.querySelector("#tetris-dot3");
        let pic2 = document.querySelector("#tetris2");
        let pic3 = document.querySelector("#tetris3");
        if(currenttetrisDot === 1){
            currenttetrisDot = 2;
            dot1.style.backgroundColor = "white";
            dot1.style.border = "1px solid black";
            dot2.style.backgroundColor = "rgb(103, 219, 151)";
            dot2.style.border = "none";
            pic2.style.opacity = "100%";
        } else if(currenttetrisDot === 2){
            currenttetrisDot = 3;
            dot2.style.backgroundColor = "white";
            dot2.style.border = "1px solid black";
            dot3.style.backgroundColor = "rgb(103, 219, 151)";
            dot3.style.border = "none";
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else{
            currenttetrisDot = 1;
            dot3.style.backgroundColor = "white";
            dot3.style.border = "1px solid black";
            dot1.style.backgroundColor = "rgb(103, 219, 151)";
            dot1.style.border = "none";
            pic3.style.opacity = "0%";
        }
    });


});