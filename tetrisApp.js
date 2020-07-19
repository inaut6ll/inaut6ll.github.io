document.addEventListener("DOMContentLoaded", () => {
    alert("   Want some advice on life? Play, and the Oracle will tell you something extremely insightful. Seriously.                                                               Also, remember to hit Save to save your Settings selections.");
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const scoreDisplay = document.querySelector("#score");
    const highScoreDisplay = document.querySelector("#high-score");
    const startBtn = document.querySelector("#start-button");
    const width = 12;
    let nextRandom = 0;
    let timerId;
    let score = 0;

    var ghostOn = false;
    var distrOn = false;
    //add function to save button
    $("#save-button").on("click", function() {

        restartF();
        if(ghostOn){
            $(".grid").css("animation-play-state", "running");
        }else{
            $(".grid").css("animation-play-state", "paused");
        }
        if(distrOn){
            $("#deco-pic").css("display", "block");
        }else{
            $("#deco-pic").css("display", "none");
        }
    });

    //different color themes for all the tetrominoes
    var colors;
    colors = ["rgb(248, 190, 190)", "rgb(248, 213, 172)", "rgb(214, 222, 250)", "rgb(221, 248, 252)", "rgb(229, 253, 206)", "rgb(247, 222, 245)", "rgb(235, 221, 252)"];


    //set high score to 0 only if high score didn't exist previously
    if(localStorage.getItem("highScore") === null){
        localStorage.setItem("highScore", 0);
    }
    highScoreDisplay.innerHTML = localStorage.getItem("highScore");
    
    //The Tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2, width * 2 + 1],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];
    const zTetromino = [
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1]
    ];
    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];
    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];
    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];
    const lTetromino2 = [
        [0, 1, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, 2],
        [1, width + 1, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width + 2, width * 2]
    ];
    const zTetromino2 = [
        [1, width, width + 1, width * 2],
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, width * 2],
        [0, 1, width + 1, width + 2]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, lTetromino2, zTetromino2];

    let currentPosition = 5;
    let currentRotation = 0;

    //randomly select a Tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //draw the Tetromino
    function draw() {
        current.forEach(item => {
            squares[currentPosition + item].classList.add("tetromino");
            squares[currentPosition + item].style.backgroundColor = colors[random];
        })
    };

    //undraw the Tetromino
    function undraw() {
        current.forEach(item => {
            squares[currentPosition + item].classList.remove("tetromino"); 
            squares[currentPosition + item].style.backgroundColor = "";
        })
    };


    var cheat = false;
    //add function to cheat button
    $("#cheat-button").on("click", () => {
        if(!cheat){
            cheat = true;
            $("#cheat-button").css("background-color", "rgb(172, 172, 172)");
        }else{
            cheat = false;
            $("#cheat-button").css("background-color", "black");
        }
    });

    var paused = true;
    //assign functions to keyCodes
    function control(e) {
        if(!paused || cheat){
            e.preventDefault();
            if (e.keyCode === 37 || e.keyCode === 65){
                moveLeft();
            } else if (e.keyCode === 38 || e.keyCode === 87){
                rotate();
            } else if (e.keyCode === 39 || e.keyCode === 68){
                moveRight();
            } else if (e.keyCode === 40 || e.keyCode === 83){
                moveDown();
            }
        }
    };
    document.addEventListener("keyup", control);


    //move down function
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    };

    //freeze function
    function freeze() {
        if (current.some(item => squares[currentPosition + item + width].classList.contains("taken"))){
            current.forEach(item => squares[currentPosition + item].classList.add("taken"));
            //start a new teromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    };

    //move the tetromino left, unless is at the edge or there is a blockage
    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(item => (currentPosition + item) % width === 0);
        if (!isAtLeftEdge){
            currentPosition -= 1;
        }

        if (current.some(item => squares[currentPosition + item].classList.contains("taken"))){
            currentPosition += 1;
        }

        draw();
    };

    //move the tetromino right, unless is at the edge or there is a blockage
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(item => (item + currentPosition  + 1) % width === 0);
        const isTouchingTaken = current.some(item => squares[currentPosition + item + 1].classList.contains("taken"));

        if (!isAtRightEdge && !isTouchingTaken) {
            currentPosition += 1;
        }

        draw();
    };

    //rotate the tetromino
    function rotate() {
        undraw();
        currentRotation++;
        if (currentRotation === current.length){
            currentRotation = 0;
        }
        current = theTetrominoes[random][currentRotation];
        draw();
    };

    //show up-next tetromino in mini-grid display
    const displaySquares = document.querySelectorAll(".mini-grid div");
    const displayWidth = 4;
    const displayIndex = 0;

    //the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
        [displayWidth + 1, displayWidth + 2, displayWidth * 2, displayWidth * 2 + 1], //zTetronimo
        [1, displayWidth, displayWidth + 1, displayWidth + 2], //tTetromino
        [0, 1, displayWidth, displayWidth + 1], //oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1], //iTetromino
        [0, 1, displayWidth + 1, displayWidth * 2 + 1], //lTetromino2
        [1, displayWidth, displayWidth + 1, displayWidth * 2]//zTetromino2
    ];

    //display the shape in the mini-grid display
    function displayShape() {
        //remove any trace of a tetromino from the entire grid
        displaySquares.forEach(item => {
            item.classList.remove("tetromino");
            item.style.backgroundColor = "";
        });
        upNextTetrominoes[nextRandom].forEach(item => {
            displaySquares[item + displayIndex].classList.add("tetromino");
            displaySquares[displayIndex + item].style.backgroundColor = colors[nextRandom];
        });

    };

    var time = 350;
    var fs = true;
    var rs = false;
    //start function
    function startGame() {
        if (rs === true){
            rs = false;
            clearInterval(timerId);
            timerId = null;
            currentPosition = 5;
            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            draw();
            timerId = setInterval(moveDown, time); //make the tetromino move down every second
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }else if (timerId != null) {
            clearInterval(timerId);
            timerId = null;
            paused = true;
        } else {
            paused = false;
            draw();
            timerId = setInterval(moveDown, time); //make the tetromino move down every second
            if (fs === true){
                nextRandom = Math.floor(Math.random() * theTetrominoes.length);
                displayShape();
                fs = false;
            }
        }
    };

    //add functionality to the start button
    startBtn.addEventListener("click", startGame);

    //add functionality to the restart button
    var restart = document.querySelector("#restart");
    restart.addEventListener("click", restartF);

    //restart function
    function restartF() {
        //remove all from entire grid
        for (var i = 0; i < squares.length - width; i++){
            squares[i].classList.remove("tetromino");
            squares[i].classList.remove("taken");
            squares[i].style.backgroundColor = "";
        }
        if (localStorage.getItem("highScore") < score){
            localStorage.setItem("highScore", score);
            highScoreDisplay.innerHTML = localStorage.getItem("highScore");
        }
        score = 0;
        scoreDisplay.innerHTML = score;
        paused = false;
        rs = true;
        startGame();
    };

    function addScore() {
        for (let i = 0; i < squares.length; i += width){
            var count = 0;
            for (var j = i; j < i + width; j++){
                if (squares[j].classList.contains("tetromino")){
                    count++;
                }
            }
            if (count === width){
                score += 10;
                scoreDisplay.innerHTML = score;
                for (var j = i; j < i + width; j++){
                    squares[j].classList.remove("taken"); 
                    squares[j].classList.remove("tetromino"); 
                    squares[j].style.backgroundColor = "";
                }

                //this part is confusing and I don't get it >:(
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(item => grid.appendChild(item));
            }
        }
    };

    //game over
    function gameOver(){
        if (current.some(item => squares[currentPosition + item].classList.contains("taken"))){
            if (localStorage.getItem("highScore") < score){
                localStorage.setItem("highScore", score);
                highScoreDisplay.innerHTML = localStorage.getItem("highScore");
            }
            clearInterval(timerId);
            if(score < 10){
                alert("The Oracle says: .....no comment.");
            } else if(score < 30){
                alert("The Oracle says: Welp, at least you tried.");
            } else if(score < 50){
                alert("The Oracle says: Hi, I'm Joe. I am permanently stuck inside this game. How are you?");
            } else if(score < 70){
                alert("The Oracle says: There is no place like home, and home is where the galoobers are.");
            } else if(score < 90){
                alert("The Oracle says: IT'S TIME TO DDDDDDDDDUEL!");
            } else if(score < 110){
                alert("The Oracle says: I am the globglogabgalab, swibbledooblewibblewobblejibblejobjab!");
            } else if(score < 130){
                alert("The Oracle says: Money is happiness. Call 342-235-2353 to prove me wrong.");
            } else if(score < 150){
                alert("The Oracle says: You are at age where no one can ever tell what age you are, and every guess is for some reason at least 10 years off.");
            } else if(score < 170){
                alert("The Oracle says: We must save the bees.");
            } else if(score < 190){
                alert("The Oracle says: Go check if you left the oven on. Chances are, you haven't, but go check just in case.");
            } else if(score < 210){
                alert("The Oracle says: Sorry, but I am currently lost in the woods. Please check back again later.");
            } else if(score < 230){
                alert("The Oracle says: Do you get an occasional splitting headache? That's someone trying to summon you from the other side of the world.");
            } else if(score < 250){
                alert("The Oracle says: SASAGEYOOO SASAGEYOOOO SHINZOU WO SASAGEYOOOOO");
            } else if(score < 270){
                alert("The Oracle says: You don't belong here. Where exactly is here? That is something for you to figure out.");
            } else if(score < 290){
                alert("The Oracle says: You are on the verge of an extremely important discovery, except.... it might not actually be that important. You might discover the cure for cancer, or maybe you'll just find that sock you lost three years ago.");
            } else if(score < 310){
                alert("The Oracle says: Happy birthday! Remember to brush your teeth regularly ^-^ (unless you want rotten teeth)");
            } else if(score < 330){
                alert("The Oracle says: Why are you still here? They're about to find you, you need to go!!!");
            } else if(score < 350){
                alert("The Oracle says: So... you think you got a high score? Think again.");
            } else if(score < 370){
                alert("The Oracle says: Ann is our one and only lord and savior.");
            } else if(score < 390){
                alert("The Oracle says: Happy Birthday!!! (it's me again)");
            } else if(score < 410){
                alert("The Oracle says: Don't freak out when you see the unicorn on your lawn.");
            } else if(score < 430){
                alert("The Oracle says: As my mother always used to say, \"Don't pick your nose.\"");
            }
            else if(score < 450){
                alert("The Oracle says: Who farted? It definitely wasn't me.");
            }
            else if(score < 470){
                alert("The Oracle says: That's called bribery.");
            }
            else if(score < 490){
                alert("The Oracle says: Last week, god spoke to me. He told me to go away and leave him alone.");
            }
            else if(score < 510){
                alert("The Oracle says: Every time I see you, I scream in terror. Then again, I haven't ever seen you before.");
            }
            else if(score < 530){
                alert("The Oracle says: Here's a secret: I let the dogs out.");
            }
            else if(score < 550){
                alert("The Oracle says: Do you think you're amazing? If so, think again.");
            }
            else if(score < 570){
                alert("The Oracle says: You've got the best hair in the world. Don't let anyone take that away from you.");
            }
            else if(score < 590){
                alert("The Oracle says: If you ever feel down, think about what Alexander the Great did at your age. Then, you'll feel even more down. :)");
            }
            else if(score < 610){
                alert("The Oracle says: Want to save the world? Well, you sure aren't doing that by spending 15 minutes playing Tetris... or are you?");
            }else{
                alert("The Oracle says: ...no comment.");
            }
        }
        
    }

    //add functionality to rules button
    $("#rules-button").on("click", function() {
        $("#rules").fadeToggle();
    });

    //make radio active
    $("#milk").on("click", () => {
        $("[for='milk']").addClass("active");
        $("[for='penguin']").removeClass("active");
        $("[for='party']").removeClass("active");
        $("[for='sad']").removeClass("active");
        $("[for='ghost']").removeClass("active");
        $("[for='exclamation']").removeClass("active");

        time = 600;
        ghostOn = false;
        distrOn = false;
    });
    $("#penguin").on("click", () => {
        $("[for='penguin']").addClass("active");
        $("[for='milk']").removeClass("active");
        $("[for='party']").removeClass("active");
        $("[for='sad']").removeClass("active");
        $("[for='ghost']").removeClass("active");
        $("[for='exclamation']").removeClass("active");

        time = 350;
        ghostOn = false;
        distrOn = false;
    });
    $("#party").on("click", () => {
        $("[for='party']").addClass("active");
        $("[for='penguin']").removeClass("active");
        $("[for='milk']").removeClass("active");
        $("[for='sad']").removeClass("active");
        $("[for='ghost']").removeClass("active");
        $("[for='exclamation']").removeClass("active");

        time = 200;
        ghostOn = false;
        distrOn = false;
    });
    $("#sad").on("click", () => {
        $("[for='party']").removeClass("active");
        $("[for='penguin']").removeClass("active");
        $("[for='milk']").removeClass("active");
        $("[for='sad']").addClass("active");
        $("[for='ghost']").removeClass("active");
        $("[for='exclamation']").removeClass("active");

        time = 100;
        ghostOn = false;
        distrOn = false;
    });
    $("#ghost").on("click", () => {
        $("[for='ghost']").addClass("active");
        $("[for='penguin']").removeClass("active");
        $("[for='party']").removeClass("active");
        $("[for='sad']").removeClass("active");
        $("[for='milk']").removeClass("active");
        $("[for='exclamation']").removeClass("active");

        time = 200;
        ghostOn = true;
        distrOn = false;
    });
    $("#exclamation").on("click", () => {
        $("[for='exclamation']").addClass("active");
        $("[for='penguin']").removeClass("active");
        $("[for='party']").removeClass("active");
        $("[for='sad']").removeClass("active");
        $("[for='ghost']").removeClass("active");
        $("[for='milk']").removeClass("active");

        time = 200;
        ghostOn = false;
        distrOn = true;
    });


    //themes buttons
    $("#default").on("click", () => {
        colors = ["rgb(0, 0, 0)", "rgb(58, 58, 58)", "rgb(107, 106, 106)", "rgb(155, 154, 154)", "rgb(207, 204, 204)", "rgb(255, 50, 50)", "rgb(255, 145, 145)"];
        $("#bg").css("background", "linear-gradient(-45deg, rgba(95, 1, 1, 0.918), rgba(255, 0, 0, 0.692), white)");
        $("body").css("color", "black");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "white");
        $("#deco-pic1").css("background", "linear-gradient(0deg, black, black)");
        $("#deco-pic1").html("¯\_(ツ)_/¯");
        $("#deco-pic1").css("border", "0px solid transparent");
        $(".button").css("border", "");
        $(".grid").css("background", "linear-gradient(0deg, white, white)");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#menu-bg").css("color", "black");
        $("#menu-bg").css("background", "linear-gradient(90deg, white, white)");
        $("#menu-bg").css("border", "5px double black");
        $("#container").css("border", "1px solid transparent");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "black");
        restartF();
    });
    $("#pastel").on("click", () => {
        colors = ["rgb(248, 190, 190)", "rgb(248, 213, 172)", "rgb(214, 222, 250)", "rgb(221, 248, 252)", "rgb(229, 253, 206)", "rgb(247, 222, 245)", "rgb(235, 221, 252)"];
        $("body").css("color", "black");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "black");
        $("#deco-pic1").css("background", "linear-gradient(45deg, rgb(255, 212, 244), rgb(195, 248, 255))");
        $("#deco-pic1").html("ヾ(≧▽≦)ゝ");
        $("#deco-pic1").css("border", "0px solid transparent");
        $("#bg").css("background", "linear-gradient(-45deg, rgba(204, 241, 255, 0.918), rgba(218, 255, 210, 0.692), rgb(255, 216, 216))");
        $(".button").css("border", "");
        $(".grid").css("background", "linear-gradient(0deg, white, white)");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#menu-bg").css("color", "black");
        $("#menu-bg").css("background", "linear-gradient(90deg, white, white)");
        $("#menu-bg").css("border", "5px double black");
        $("#container").css("border", "1px solid transparent");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "black");
        restartF();
    });
    $("#dark").on("click", () => {
        colors = ["", "", "", "", "", "", ""];
        $("body").css("color", "white");
        $("#title").css("text-shadow", "2px 2px gray");
        $("#deco-pic1").css("color", "black");
        $("#deco-pic1").css("background", "linear-gradient(0deg, white, white)");
        $("#deco-pic1").html("(⌐■_■)");
        $("#deco-pic1").css("border", "0px solid transparent");
        $("#bg").css("background", "linear-gradient(0deg, black, black)");
        $("#menu-bg").css("color", "white");
        $("#menu-bg").css("background", "linear-gradient(90deg, black, black)");
        $("#menu-bg").css("border", "5px double white");
        $(".button").css("border", "1px solid white");
        $(".grid").css("background", "linear-gradient(0deg, white, white)");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#container").css("border", "1px solid transparent");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "black");
        restartF();
    });
    $("#dark2").on("click", () => {
        colors = ["white", "white", "white", "white", "white", "white", "white"];
        $("body").css("color", "white");
        $("#title").css("text-shadow", "2px 2px gray");
        $("#deco-pic1").css("color", "white");
        $("#deco-pic1").css("background", "linear-gradient(0deg, black, black)");
        $("#deco-pic1").html("(⌐■_■)");
        $("#deco-pic1").css("border", "0px solid transparent");
        $("#bg").css("background", "linear-gradient(0deg, black, black)");
        $("#menu-bg").css("color", "black");
        $(".button").css("border", "white");
        $(".grid").css("background", "linear-gradient(0deg, black, black)");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "1px solid white");
        $("#menu-bg").css("color", "black");
        $("#menu-bg").css("background", "linear-gradient(90deg, white, white)");
        $("#menu-bg").css("border", "5px double black");
        $("#container").css("border", "1px solid white");
        $("#container").css("background", "linear-gradient(0deg, black, black)");
        $(".mini-grid").css("background", "linear-gradient(0deg, black, black)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "white");
        restartF();
    });
    $("#light").on("click", () => {
        colors = ["gray", "gray", "gray", "gray", "gray", "gray", "gray"];
        colors = ["rgb(32, 32, 32)", "rgb(64, 64, 64)", "rgb(96, 96, 96)", "rgb(128, 128, 128)", "rgb(160, 160, 160)", "rgb(192, 192, 192)", "rgb(224, 224, 224)"];
        colors = ["white", "white", "white", "white", "white", "white", "white"];
        $("body").css("color", "black");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "black");
        $("#deco-pic1").css("background", "linear-gradient(0deg, white, white)");
        $("#deco-pic1").html("(⓿_⓿)");
        $("#deco-pic1").css("border", "0px solid transparent");
        $("#bg").css("background", "linear-gradient(0deg, white, white)");
        $("#menu-bg").css("color", "white");
        $("#menu-bg").css("background", "linear-gradient(0deg, black, white)");
        $("#menu-bg").css("border", "5px double white");
        $(".button").css("border", "1px solid white");
        $(".grid").css("background", "linear-gradient(0deg, black, white)");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#container").css("border", "1px solid black");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "black");
        restartF();
    });
    $("#ann").on("click", () => {
        colors = ["red", "orange", "yellow", "green", "violet", "blue", "purple"];
        $("body").css("color", "rgb(255, 0, 255)");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "black");
        $("#deco-pic1").css("background", "url(annpic.jpg)");
        $("#deco-pic1").html("");
        $("#deco-pic1").css("border", "5px ridge red");
        $("#bg").css("background", "url(annpic12.jpeg)");
        $(".button").css("border", "5px ridge rgb(255, 0, 255)");
        $(".grid").css("background", "url(annpic2.jpeg)");
        $(".grid").css("border", "3px ridge rgb(255, 0, 255)")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#menu-bg").css("color", "rgb(255, 0, 255)");
        $("#menu-bg").css("background", "url(annpic10.jpeg)");
        $("#menu-bg").css("border", "5px ridge orange");
        $("#container").css("border", "5px ridge yellow");
        $("#container").css("background", "url(annpic3.jpeg)");
        $(".mini-grid").css("background", "url(annpic11.jpeg)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "rgb(255, 0, 255)");
        restartF();
    });
    $("#blue").on("click", () => {
        colors = ["rgb(43, 195, 255)", "rgb(167, 226, 250)", "rgb(108, 207, 253)", "rgb(131, 178, 248)", "rgb(69, 140, 248)", "rgb(2, 103, 255)", "rgb(0, 47, 255)"];
        $("#bg").css("background", "linear-gradient(180deg, white, rgb(193, 248, 250), rgb(0, 153, 255), rgb(23, 56, 204)");
        $("body").css("color", "black");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "black");
        $("#deco-pic1").css("background", "linear-gradient(0deg, rgb(162, 240, 250), rgb(162, 178, 250))");
        $("#deco-pic1").html("╮(╯-╰)╭");
        $("#deco-pic1").css("border", "0px solid transparent");
        $(".button").css("border", "");
        $(".grid").css("background", "linear-gradient(180deg, rgba(255, 255, 255, 0.856), rgba(255, 255, 255, 0.856))");
        $(".grid").css("border", "")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#menu-bg").css("color", "black");
        $("#menu-bg").css("background", "linear-gradient(90deg, white, white)");
        $("#menu-bg").css("border", "5px double black");
        $("#container").css("border", "1px solid transparent");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "black");
        restartF();
    });
    $("#coffee").on("click", () => {
        colors = ["rgb(95, 44, 14)", "rgb(59, 22, 0)", "rgb(136, 71, 34)", "rgb(161, 113, 84)", "rgb(168, 65, 0)", "rgb(216, 110, 44)", "rgb(214, 139, 93)"];
        $("#bg").css("background", "url(coffee-bg.jpg)");//"linear-gradient(135deg, rgb(211, 123, 72), rgb(153, 75, 31), rgb(94, 30, 30)");
        $("body").css("color", "rgb(43, 16, 0)");
        $("#title").css("text-shadow", "2px 2px white");
        $("#deco-pic1").css("color", "white");
        $("#deco-pic1").css("background", "linear-gradient(45deg, rgb(58, 22, 1), rgb(218, 100, 32))");
        $("#deco-pic1").html("♪(´▽｀ )");
        $("#deco-pic1").css("border", "0px solid transparent");
        $(".button").css("border", "");
        $(".grid").css("background", "linear-gradient(0deg, rgba(255, 255, 255, 0.734), rgba(255, 255, 255, 0.734))");
        $(".grid").css("border", "3px double rgb(153, 75, 31)")
        $(".grid div").css("margin", "1px");
        $(".grid div").css("border", "0px solid transparent");
        $("#menu-bg").css("color", "rgb(43, 16, 0)");
        $("#menu-bg").css("background", "linear-gradient(0deg, white, white)");
        $("#menu-bg").css("border", "5px double rgb(153, 75, 31)");
        $("#container").css("border", "5px double rgb(153, 75, 31)");
        $("#container").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid").css("background", "linear-gradient(0deg, white, white)");
        $(".mini-grid div").css("border", "1px solid transparent");
        $("#grid-next").css("color", "rgb(43, 16, 0)");
        restartF();
    });











});