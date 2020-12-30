//onclick functions for circles

let elements = [...document.querySelectorAll(".circle")];
elements.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.className == "circle-hover"){
            e.target.className = "circle";
        } else if (e.target.className.includes("circle")){
            e.target.className = "circle-hover";
        }
    });
});