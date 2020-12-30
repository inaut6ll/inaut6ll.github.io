//animate mouse parallax
const mouseParallax = (element, xDistance, yDistance, speed) => {
    let x = (window.innerWidth - xDistance * speed) / 100;
    let y = (window.innerHeight - yDistance * speed) / 100;

    let deg = (window.innerHeight - yDistance * speed) / 300

    element.style.transform = `translate(${-x}px,${-y}px) skew(${deg}deg)`;
}

document.addEventListener("mousemove", e=> {
    document.querySelectorAll(".frag").forEach(frag => {
        const speed = frag.getAttribute("data-speed");

        mouseParallax(frag, e.pageX, e.pageY, speed);
    })
})