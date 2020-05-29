document.addEventListener("DOMContentLoaded", () => {
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
    colors = ["rgb(0, 0, 0)", "rgb(58, 58, 58)", "rgb(107, 106, 106)", "rgb(155, 154, 154)", "rgb(207, 204, 204)", "rgb(255, 50, 50)", "rgb(255, 145, 145)"];

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

    //assign functions to keyCodes
    function control(e) {
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
        } else {
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
            if(score < 80){
                alert("You lost already? Wow, you really suck.");
            } else if(score < 150){
                alert("Welp, you ain't the best at this game. At least you tried.");
            } else if(score < 600){
                alert("Good game, bro.");
            } else{
                alert("...no comment.");
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











});