function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener("DOMContentLoaded", function () {

    //make cover disappear after animation ends
    setTimeout(function () {
        document.querySelector("#cover").style.display = "none";
    }, 4100);

    //menu bottom appear disappear
    var prevScrollPos = 0;
    window.onscroll = function () {
        if (window.pageYOffset < 200) {
            document.getElementById("menu-bottom").style.top = "100%";
        } else {
            document.getElementById("menu-bottom").style.top = "74%";
        }
    };

    //contact
    document.querySelector("#contact-btn").addEventListener("click", function (e) {
        document.querySelector("#c3").className = "circle-hover";
        document.querySelector("#contact3").style.display = "grid";
        a.style.borderColor = "rgb(134, 173, 255)";
    });

    document.querySelector("#contact-btn2").addEventListener("click", function (e) {
        document.querySelector("#c3").className = "circle-hover";
        document.querySelector("#contact3").style.display = "grid";
        a.style.borderColor = "rgb(134, 173, 255)";
    });

    //onclick functions for circles
    var elements = [].concat(_toConsumableArray(document.querySelectorAll(".circle")));
    elements.forEach(function (element) {
        element.addEventListener("click", function (e) {
            var a = e.target;
            var contact1 = document.querySelector('#contact1');
            var contact2 = document.querySelector('#contact2');
            var contact3 = document.querySelector('#contact3');
            if (a.className == "circle-hover") {
                a.className = "circle";
                if (a.id == "c2") {
                    a.style.borderColor = "black";
                    contact2.style.display = "none";
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato";
                    contact3.style.display = "none";
                } else {
                    a.style.borderColor = "black";
                    contact1.style.display = "none";
                }
            } else if (a.className.includes("circle")) {
                a.className = "circle-hover";
                if (a.id == "c2") {
                    a.style.borderColor = "rgb(134, 173, 255)";
                    contact2.style.display = "flex";
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato";
                    contact3.style.display = "grid";
                } else {
                    a.style.borderColor = "orange";
                    contact1.style.display = "flex";
                }
            }
        });
    });

    //data for each project container
    var projects = {
        veracity: {
            color: "rgb(106, 208, 255)",
            currentDotNum: 1,
            name: 'veracity',
            title: 'Veracity',
            type: 'React Web App',
            date: 'November 2020',
            descrip: 'Implements the ReactJS framework and Charity Navigator API to provide users with information on the most transparent and financially accountable charities. May be dead due to API subscription expiration. Click <a style="font-size: 1.6rem; color:rgb(255, 136, 115)" href="https://youtu.be/gMbwmaDJzTM" target="_blank">here</a> to see demo video.'

        },
        snowball: {
            color: "rgb(86, 40, 255)",
            currentDotNum: 1
        },
        weather: {
            color: "black",
            currentDotNum: 1
        },
        two: {
            color: "orange",
            currentDotNum: 1
        },
        tetris: {
            color: "rgb(103, 219, 151)",
            currentDotNum: 1
        }
    };

    var projectArr = [projects.veracity, projects.snowball, projects.weather, projects.two, projects.tetris];
    projectArr.forEach(function (project) {
        document.querySelector("#").textContent = "\n        <div class=\"descrip-box\">\n            <div class=\"controls\">\n                <div class=\"dots\">\n                <div class=\"hex\" id=\"" + project.name + "-hex\" style=\"z-index: -100;\"></div>\n                <div class=\"dot dot1 " + project.name + "-dot\" id=\"" + project.name + "-dot1\"></div>\n                <div class=\"dot dot2 " + project.name + "-dot\" id=\"" + project.name + "-dot2\"></div>\n                <div class=\"dot dot3 " + project.name + "-dot\" id=\"" + project.name + "-dot3\"></div>\n                <i id=\"" + project.name + "-icon\" class=\"fas fa-angle-right icon right-arrow\"></i>\n                </div>\n            </div>\n            <div class=\"descrip-text\">\n                <h4 class=\"title\">" + project.title + "</h4>\n                <h5 class=\"type\">" + project.type + "</h5>\n                <h6 class=\"date\">" + project.date + "</h6>\n                <p class=\"descrip\">" + project.descrip + "</p>\n            </div>\n        </div>\n        <div class=\"image\" id=\"" + project.name + "\">\n            <div id=\"" + project.name + "2\" class=\"image-over\"></div>\n            <div id=\"" + project.name + "3\" class=\"image-over image-over2\"></div>\n            <div id=\"" + project.name + "-hover\" class=\"white-hover\"></div>\n        </div> ";
    });

    //add functionality to all images (snowball is exception)
    var allImages = document.querySelectorAll(".white-hover");
    var imageArr = [].concat(_toConsumableArray(allImages));
    imageArr.forEach(function (element) {
        return element.addEventListener("click", function (e) {
            var ID = e.target.id;
            var p = void 0;
            if (ID == "veracity-hover") {
                p = "veracity";
            } else if (ID == "snowball-hover") {
                window.open("https://devpost.com/software/dodoplier", "_blank");
                return;
            } else if (ID == "weather-hover") {
                p = "weather";
            } else if (ID == "two-hover") {
                p = "2048";
            } else {
                p = "tetris";
            }
            window.open("https://lilianzlettuce.github.io/" + p, "_blank");
        });
    });

    function getNextDotNum(current) {
        if (current == 3) {
            current = 0;
        }
        var arr = [1, 2, 3];
        return arr[current];
    }

    //add functionality to all right arrows
    var allArrows = document.querySelectorAll(".right-arrow");
    var arrowArr = [].concat(_toConsumableArray(allArrows));
    arrowArr.forEach(function (element) {
        return element.addEventListener("click", function (e) {
            var id = e.target.id;
            var p = void 0;
            if (id == "veracity-icon") {
                p = "veracity";
            } else if (id == "snowball-icon") {
                p = "snowball";
            } else if (id == "weather-icon") {
                p = "weather";
            } else if (id == "two-icon") {
                p = "two";
            } else {
                p = "tetris";
            }
            var color = void 0;
            var currentDotNum = void 0;
            eval("color = projects." + p + ".color ");
            eval("currentDotNum = projects." + p + ".currentDotNum ");

            var currentDot = void 0;
            var nextDot = void 0;
            var pic2 = document.querySelector("#" + p + "2");
            var pic3 = document.querySelector("#" + p + "3");

            if (currentDotNum === 1) {
                currentDot = document.querySelector("#" + p + "-dot1");
                nextDot = document.querySelector("#" + p + "-dot2");
                pic2.style.opacity = "100%";
            } else if (currentDotNum === 2) {
                currentDot = document.querySelector("#" + p + "-dot2");
                nextDot = document.querySelector("#" + p + "-dot3");
                pic3.style.opacity = "100%";
            } else {
                currentDot = document.querySelector("#" + p + "-dot3");
                nextDot = document.querySelector("#" + p + "-dot1");
                pic2.style.opacity = "0%";
                pic3.style.opacity = "0%";
            }
            currentDot.style.backgroundColor = "white";
            currentDot.style.border = "1px solid black";
            nextDot.style.backgroundColor = color;
            nextDot.style.border = "none";
            eval("projects." + p + (".currentDotNum = " + getNextDotNum(currentDotNum) + " "));
        });
    });

    //add functionality to all dots
    var allDots = document.querySelectorAll(".dot");
    var dotsArr = [].concat(_toConsumableArray(allDots));
    dotsArr.forEach(function (element) {
        return element.addEventListener("click", function (e) {
            var id = e.target.id;
            var p = void 0;
            if (id.includes("veracity")) {
                p = "veracity";
            } else if (id.includes("snowball")) {
                p = "snowball";
            } else if (id.includes("weather")) {
                p = "weather";
            } else if (id.includes("two")) {
                p = "two";
            } else {
                p = "tetris";
            }
            var color = void 0;
            var currentDotNum = void 0;
            eval("color = projects." + p + ".color ");
            eval("currentDotNum = projects." + p + ".currentDotNum ");

            var pic2 = document.querySelector("#" + p + "2");
            var pic3 = document.querySelector("#" + p + "3");

            var currentDot = document.querySelector("#" + p + "-dot" + currentDotNum);
            currentDot.style.backgroundColor = "white";
            currentDot.style.border = "1px solid black";

            var nextDot = document.querySelector("#" + id);
            nextDot.style.backgroundColor = color;
            nextDot.style.border = "none";

            var allClasses = e.target.classList;
            var classArr = [].concat(_toConsumableArray(allClasses));
            var changeTo = void 0;
            if (classArr.includes("dot2")) {
                changeTo = 2;
                pic2.style.opacity = "100%";
                setTimeout(function () {
                    pic3.style.opacity = "0%";
                }, 100);
            } else if (classArr.includes("dot3")) {
                changeTo = 3;
                pic3.style.opacity = "100%";
            } else {
                changeTo = 1;
                pic2.style.opacity = "0%";
                pic3.style.opacity = "0%";
            }
            eval("projects." + p + (".currentDotNum = " + changeTo + " "));
        });
    });
});