//contact
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#contact-btn").addEventListener("click", (e) => {
        document.querySelector("#c3").className = "circle-hover";
        document.querySelector("#contact3").style.display = "grid";
    });


    //onclick functions for circles
    let elements = [...document.querySelectorAll(".circle")];
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            let a = e.target;
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
                    a.style.borderColor = "rgb(151, 243, 255)";
                    document.querySelector("#contact2").style.display = "flex";
                } else if (a.id == "c3") {
                    a.style.borderColor = "black";
                    document.querySelector("#contact3").style.display = "grid";
                } else {
                    a.style.borderColor = "tomato";
                }
            }
        });
    });
});