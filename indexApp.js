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

    //add functionality to image (takes you to the project) 
    document.querySelector("#two-hover").addEventListener("click", () => {
        window.open("https://lilianzlettuce.github.io/2048", "_blank");
    });

    //add functionality to right arrow (changes images when clicked)
    let currentDot = 1;
    document.querySelector("#two-icon").addEventListener("click", () => {
        let dot1 = document.querySelector("#two-dot1");
        let dot2 = document.querySelector("#two-dot2");
        let dot3 = document.querySelector("#two-dot3");
        let pic2 = document.querySelector("#two2");
        let pic3 = document.querySelector("#two3");
        if(currentDot === 1){
            currentDot = 2;
            dot1.style.backgroundColor = "white";
            dot1.style.border = "1px solid black";
            dot2.style.backgroundColor = "tomato";
            dot2.style.border = "none";
            pic2.style.opacity = "100%";
        } else if(currentDot === 2){
            currentDot = 3;
            dot2.style.backgroundColor = "white";
            dot2.style.border = "1px solid black";
            dot3.style.backgroundColor = "tomato";
            dot3.style.border = "none";
            pic2.style.opacity = "0%";
            pic3.style.opacity = "100%";
        } else{
            currentDot = 1;
            dot3.style.backgroundColor = "white";
            dot3.style.border = "1px solid black";
            dot1.style.backgroundColor = "tomato";
            dot1.style.border = "none";
            pic3.style.opacity = "0%";
        }
    });
});