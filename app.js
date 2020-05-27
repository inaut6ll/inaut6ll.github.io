document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const scoreDisplay = document.querySelector("#score");
    const startBtn = document.querySelector("#start-button");
    const width = 10;
    let nextRandom = 0;
    let timerId;
    let score = 0;

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

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    //randomly select a Tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //draw the Tetromino
    function draw() {
        current.forEach(item => {
            squares[currentPosition + item].classList.add("tetromino");
        })
    };

    //undraw the Tetromino
    function undraw() {
        current.forEach(item => {
            squares[currentPosition + item].classList.remove("tetromino"); 
        })
    };

    //assign functions to keyCodes
    function control(e) {
        if (e.keyCode === 37){
            moveLeft();
        } else if (e.keyCode === 38){
            rotate();
        } else if (e.keyCode === 39){
            moveRight();
        } else if (e.keyCode === 40){
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
        const isAtRightEdge = current.some(item => (item + currentPosition  + 1) % 10 === 0);
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
    let displayIndex = 0;

    //the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
        [displayWidth + 1, displayWidth + 2, displayWidth * 2, displayWidth * 2 + 1], //zTetronimo
        [1, displayWidth, displayWidth + 1, displayWidth + 2], //tTetromino
        [0, 1, displayWidth, displayWidth + 1], //oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //iTetromino
    ];

    //display the shape in the mini-grid display
    function displayShape() {
        //remove any trace of a tetromino from the entire grid
        displaySquares.forEach(item => {
            item.classList.remove("tetromino");
        });
        upNextTetrominoes[nextRandom].forEach(item => {
            displaySquares[item + displayIndex].classList.add("tetromino")
        });

    };

    //add functionality to the button
    startBtn.addEventListener("click", () => {
        if (timerId != null) {
            clearInterval(timerId);
            timerId = null;
        }else {
            draw();
            timerId = setInterval(moveDown, 500); //make the tetromino move down every second
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

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
                }
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(item => grid.appendChild(item));
            }
        }
    };















});