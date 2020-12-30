//contact
document.querySelector("#contact-btn").addEventListener("click", (e) => {
    console.log("test pasdfe");
    document.querySelector("#c3").className = "circle-hover";
    document.querySelector("#contact3").style.display = "block";
});


//onclick functions for circles
let elements = [...document.querySelectorAll(".circle")];
elements.forEach(element => {
    element.addEventListener("click", (e) => {
        let a = e.target;
        if (a.className == "circle-hover"){
            a.className = "circle";
            if (a.id == "c2") {
                document.querySelector("#contact2").style.display = "none";
            } else {
                document.querySelector("#contact3").style.display = "none";
            }
        } else if (a.className.includes("circle")){
            a.className = "circle-hover";
            if (a.id == "c2") {
                document.querySelector("#contact2").style.display = "block";
            } else {
                document.querySelector("#contact3").style.display = "block";
            }
        }
    });
});