//cube animation
let isSpinning = true;

const illo = new Zdog.Illustration({
    element: '.canvas',
    zoom: .5,
    dragRotate: true,
    onDragStart: function() {
        isSpinning = false;
    }
})

const cube = new Zdog.Box({
    addTo: illo,
    width: 50,
    height: 50, 
    depth: 50,
    stroke: 25,
    leftFace: "rgb(200,200,200)",
    rightFace: "rgb(0,0,0)",
    topFace: "rgb(255, 101, 101)",
    bottomFace: "rgb(151, 243, 255)",
})

illo.updateRenderGraph();

function animate() {
    if (isSpinning) {
        illo.rotate.y += 0.01;
        illo.rotate.x += 0.01;
    }
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();


//animate mouse parallax
const mouseParallax = (element, xDistance, yDistance, speed) => {
    let x = (window.innerWidth - xDistance * speed) / 100;
    let y = (window.innerHeight - yDistance * speed) / 100;

    let deg = (window.innerHeight - yDistance * speed) / 200

    element.style.transform = `translate(${-x}px,${-y}px) skew(${deg}deg) rotate(${deg}deg)`;
}

document.addEventListener("mousemove", e=> {
    document.querySelectorAll(".frag").forEach(frag => {
        const speed = frag.getAttribute("data-speed");

        mouseParallax(frag, e.pageX, e.pageY, speed);
    })
})