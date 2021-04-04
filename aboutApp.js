document.addEventListener("DOMContentLoaded", () => {

    //add function to contact button -- the icon buttons animated
    document.querySelector("#contact-btn").addEventListener("click", () => {
        let email = document.querySelector("#email");
        let linkedin = document.querySelector("#linkedin");
        let github = document.querySelector("#github");
        let question = document.querySelector("#question");
        email.style.transform = "translateY(-100px)";
        setTimeout(() => {email.style.transform = "translateY(0px)";}, 600);
        setTimeout(() => {linkedin.style.transform = "translateY(-100px)";}, 200);
        setTimeout(() => {linkedin.style.transform = "translateY(0px)";}, 800);
        setTimeout(() => {github.style.transform = "translateY(-100px)";}, 400);
        setTimeout(() => {github.style.transform = "translateY(0px)";}, 1000);
        setTimeout(() => {question.style.transform = "translateY(-100px)";}, 600);
        setTimeout(() => {question.style.transform = "translateY(0px)";}, 1200);
    });

    //animate mouse parallax
    const mouseParallax = (element, xDistance, yDistance, speed) => {
        let x = (window.innerWidth - xDistance * speed) / 100;
        let y = (window.innerHeight - yDistance * speed) / 100;

        let deg = (window.innerHeight - yDistance * speed + xDistance) / 500;

        element.style.transform = `translate(${-x}px,${-y}px) skew(${deg}deg)`;
    }

    document.addEventListener("mousemove", e=> {
        document.querySelectorAll(".frag").forEach(frag => {
            const speed = frag.getAttribute("data-speed");
            mouseParallax(frag, e.pageX, e.pageY, speed);
        })
    })
})