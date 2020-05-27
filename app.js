document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const ScoreDisplay = document.querySelector("#score");
    const StartBtn = document.querySelector("#start-button");
    const width = 10;

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

    //make the tetromino move down every second
    timerId = setInterval(moveDown, 500);

    //assign functions to keyCodes
    function control(e) {
        if (e.keyCode === 37){
            moveLeft();
        }
        if (e.keyCode === 39){
            moveRight();
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
            random = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
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



});