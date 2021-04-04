document.addEventListener("DOMContentLoaded", function () {

    //add function to contact button -- the icon buttons animated
    document.querySelector("#contact-btn").addEventListener("click", function () {
        var email = document.querySelector("#email");
        var linkedin = document.querySelector("#linkedin");
        var github = document.querySelector("#github");
        var question = document.querySelector("#question");
        email.style.transform = "translateY(-100px)";
        setTimeout(function () {
            email.style.transform = "translateY(0px)";
        }, 600);
        setTimeout(function () {
            linkedin.style.transform = "translateY(-100px)";
        }, 200);
        setTimeout(function () {
            linkedin.style.transform = "translateY(0px)";
        }, 800);
        setTimeout(function () {
            github.style.transform = "translateY(-100px)";
        }, 400);
        setTimeout(function () {
            github.style.transform = "translateY(0px)";
        }, 1000);
        setTimeout(function () {
            question.style.transform = "translateY(-100px)";
        }, 600);
        setTimeout(function () {
            question.style.transform = "translateY(0px)";
        }, 1200);
    });

    //animate mouse parallax
    var mouseParallax = function mouseParallax(element, xDistance, yDistance, speed) {
        var x = (window.innerWidth - xDistance * speed) / 100;
        var y = (window.innerHeight - yDistance * speed) / 100;

        var deg = (window.innerHeight - yDistance * speed + xDistance) / 500;

        element.style.transform = "translate(" + -x + "px," + -y + "px) skew(" + deg + "deg)";
    };

    document.addEventListener("mousemove", function (e) {
        document.querySelectorAll(".frag").forEach(function (frag) {
            var speed = frag.getAttribute("data-speed");
            mouseParallax(frag, e.pageX, e.pageY, speed);
        });
    });
});