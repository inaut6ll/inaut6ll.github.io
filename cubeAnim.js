document.addEventListener("DOMContentLoaded", function () {
    //cube animation
    var isSpinning = false;

    document.querySelector(".canvas").addEventListener('click', function () {
        if (isSpinning) {
            isSpinning = false;
        } else {
            isSpinning = true;
        }
    });

    var illo = new Zdog.Illustration({
        element: '.canvas',
        zoom: .5,
        dragRotate: true,
        onDragStart: function onDragStart() {
            isSpinning = false;
        }
    });

    var cube = new Zdog.Box({
        addTo: illo,
        width: 50,
        height: 50,
        depth: 50,
        stroke: 25,
        leftFace: "rgb(200,200,200)",
        rightFace: "rgb(0,0,0)",
        topFace: "rgb(255, 101, 101)",
        bottomFace: "rgb(151, 243, 255)"
    });

    illo.updateRenderGraph();

    function animate() {
        if (isSpinning) {
            illo.rotate.y += 0.008;
            illo.rotate.x += 0.008;
        }
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }

    animate();
});