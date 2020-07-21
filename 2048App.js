document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = $(".grid");
    const scoreDisplay = $("#score");
    const highDisplay = $("#highscore");
    const resultDisplay = $("#result");
    const width = 4;
    let squares = [];
    let score = 0;
    if (localStorage.getItem("high") === null){
        localStorage.setItem("high", 0);
    }else{
        highDisplay.html(localStorage.getItem("high"));
    }

    //create a playing board
    function createBoard() {
        for (let i = 0; i < width * width; i++){
            let square = $("<div></div>");
            square.html("0");
            gridDisplay.append(square);
            squares.push(square);
        }
        gen();
        gen();
    };
    createBoard();

    //generate a number randomly
    function gen() {
        let r = Math.floor(Math.random() * squares.length);
        if(squares[r].html() == "0"){
            squares[r].animate({height: "10px", width: "10px"}, 50);
            squares[r].animate({height: "110px", width: "110px"}, 300);
            squares[r].html("2");
        }else {
            gen();
        }
    };

    //update score
    function updateScore(number) {
        score += number;
        scoreDisplay.html(score);
        if (score > localStorage.getItem("high")){
            localStorage.setItem("high", score);
            highDisplay.html(score);
        }
    };

    //swipe right
    function moveRight() {
        let a = false;
        for (let i = 0; i < width * width; i += 4){
            let row = [];
            for (let j = 0; j < width; j++){
                let temp = squares[i + j].html();
                row.push(parseInt(temp));
            }
            let oldRow = row;

            let filteredRow = row.filter(num => num);
            let missing = width - filteredRow.length;
            let zeros = Array(missing).fill(0);
            let newRow = zeros.concat(filteredRow);

            for (let j = 0; j < width; j++){
                squares[i + j].html(newRow[j]);
            }

            for (let j = 0; j < oldRow.length; j++) {
                if(oldRow[j] != newRow[j]){
                    a = true; //a move happened
                }
            }
        }
        return a;
    };

    //swipe left
    function moveLeft() {
        let a = false;
        for (let i = 0; i < width * width; i += width){
            let row = [];
            for (let j = 0; j < width; j++){
                let temp = squares[i + j].html();
                row.push(parseInt(temp));
            }
            let oldRow = row;

            let filteredRow = row.filter(num => num);
            let numMissing = width - filteredRow.length;
            let zeros = Array(numMissing).fill(0);
            let newRow = filteredRow.concat(zeros);

            for (let j = 0; j < width; j++){
                squares[i + j].html(newRow[j]);
            }

            for (let j = 0; j < oldRow.length; j++) {
                if(oldRow[j] != newRow[j]){
                    a = true; //a move happened
                }
            }
        }
        return a;
    };

    //combine row for when move right
    function combineRight() {
        let a = false;
        for (let i = width * width - 2; i > -1; i--) {
            if ((i + 1) % width !== 0 && squares[i].html() != 0 && squares[i].html() == squares[i + 1].html()){
                squares[i + 1].animate({height: "40px", width: "40px"}, 10);
                squares[i + 1].animate({height: "110px", width: "110px"}, 300);
                let total = parseInt(squares[i].html()) + parseInt(squares[i + 1].html());
                squares[i].html(0);
                squares[i + 1].html(total);
                updateScore(total);
                a = true; //a combination happened
            }
        }
        checkForWin();
        return a;
    }

    //combine row for when move left
    function combineLeft() {
        let a = false;
        for (let i = 0; i < width * width - 1; i++) {
            if ((i + 1) % width !== 0 && squares[i].html() != 0 && squares[i].html() == squares[i + 1].html()){
                squares[i].animate({height: "40px", width: "40px"}, 10);
                squares[i].animate({height: "110px", width: "110px"}, 300);
                let total = parseInt(squares[i].html()) + parseInt(squares[i + 1].html());
                squares[i].html(total);
                squares[i + 1].html(0);
                updateScore(total);
                a = true; //a combination happened
            }
        }
        checkForWin();
        return a;
    }

    function keyRight() {
        let a = moveRight();
        let b = combineRight();
        let c = moveRight();
        if (a || b || c){
            gen();
        }
    };

    function keyLeft() {
        let a = moveLeft();
        let b = combineLeft();
        let c = moveLeft();
        if (a || b || c){
            gen();
        }
    };

    //swipe up
    function moveUp() {
        let a = false;
        for (let i = 0; i < width; i++) {
            let col = [];
            for (let j = 0; j < width; j++) {
                let temp = squares[i + j * 4].html();
                col.push(parseInt(temp));
            }
            let oldCol = col;

            let filteredCol = col.filter(num => num);
            let numMissing = width - filteredCol.length;
            let zeros = Array(numMissing).fill(0);
            let newCol = filteredCol.concat(zeros);

            for (let j = 0; j < width; j++) {
                squares[i + j * 4].html(newCol[j]);
            }

            for (let j = 0; j < oldCol.length; j++) {
                if(oldCol[j] != newCol[j]){
                    a = true; //a move happened
                }
            }
        }
        return a;
    }

    //swipe down
    function moveDown() {
        let a = false;
        for (let i = 0; i < width; i++) {
            let col = [];
            for (let j = 0; j < width; j++) {
                let temp = squares[i + j * 4].html();
                col.push(parseInt(temp));
            }
            let oldCol = col;

            let filteredCol = col.filter(num => num);
            let numMissing = width - filteredCol.length;
            let zeros = Array(numMissing).fill(0);
            let newCol = zeros.concat(filteredCol);

            for (let j = 0; j < width; j++) {
                squares[i + j * 4].html(newCol[j]);
            }

            for (let j = 0; j < oldCol.length; j++) {
                if(oldCol[j] != newCol[j]){
                    a = true; //a move happened
                }
            }
        }
        return a;
    }

    //combine col for when move up
    function combineUp() {
        let a = false;
        for (let i = 0; i < width * (width - 1); i++) {
            if(squares[i].html() != 0 && squares[i].html() === squares[i + width].html()){
                squares[i].animate({height: "40px", width: "40px"}, 10);
                squares[i].animate({height: "110px", width: "110px"}, 300);
                let total = parseInt(squares[i].html()) + parseInt(squares[i + width].html());
                squares[i].html(total);
                squares[i + 4].html(0);
                updateScore(total);
                a = true; //a combination happened
            }
        }
        checkForWin();
        return a;
    };

    //combine col for when move down
    function combineDown() {
        let a = false;
        for (let i = width * (width - 1) - 1; i >= 0; i--) {
            if(squares[i].html() != 0 && squares[i].html() === squares[i + width].html()){
                squares[i + 4].animate({height: "40px", width: "40px"}, 10);
                squares[i + 4].animate({height: "110px", width: "110px"}, 300);
                let total = parseInt(squares[i].html()) + parseInt(squares[i + width].html());
                squares[i].html(0);
                squares[i + 4].html(total);
                updateScore(total);
                a = true; //a combination happened
            }
        }
        checkForWin();
        return a;
    };

    function keyUp() {
        let a = moveUp();
        let b = combineUp();
        let c = moveUp();
        if (a || b || c){
            gen();
        }
    };

    function keyDown() {
        let a = moveDown();
        let b = combineDown();
        let c = moveDown();
        if (a || b || c){
            gen();
        }
    };

    //update tile backgrounds
    function updateBG() {
        for (let i = 0; i < width * width; i++) {
            if(squares[i].html() == 0){
                squares[i].css("color", "transparent");
                squares[i].css("background", "white");
                squares[i].css("border", "5px solid white");
            }else if(squares[i].html() == 2){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(ann1-2048.jpg)");
                squares[i].css("border", "5px outset white");
            }else if(squares[i].html() == 4){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(agnes1-2048.jpg)");
                squares[i].css("border", "5px outset lightgreen");
            }else if(squares[i].html() == 8){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(linda1-2048.jpg)");
                squares[i].css("border", "5px outset lightblue");
            }
            else if(squares[i].html() == 16){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(abby-2048.jpg)");
                squares[i].css("border", "5px outset rgb(44, 253, 2)");
            }else if(squares[i].html() == 32){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(joyce-2048.jpg)");
                squares[i].css("border", "5px outset violet");
            }else if(squares[i].html() == 64){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(jieg1-2048.jpg)");
                squares[i].css("border", "5px outset darkgray");
            }else if(squares[i].html() == 128){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(ann2-2048.jpg)");
                squares[i].css("border", "5px outset rgb(234, 0, 255)");
            }else if(squares[i].html() == 256){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(agnes2-2048.jpg)");
                squares[i].css("border", "5px outset rgb(2, 238, 255)");
            }else if(squares[i].html() == 512){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(linda2-2048.jpg)");
                squares[i].css("border", "5px outset red");
            }else if(squares[i].html() == 1024){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(ann3-2048.jpg)");
                squares[i].css("border", "5px double white");
            }else if(squares[i].html() == 2048){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(troll-2048.jpg)");
                squares[i].css("border", "5px double black");
            }else if(squares[i].html() == 4096){
                squares[i].css("color", "transparent");
                squares[i].css("background", "url(me-2048.jpg)");
                squares[i].css("border", "100px double black");
            }
        }
    };
    updateBG();

    $(document).keydown((e) => {
        if(e.keyCode === 39 || e.keyCode === 68) {
            e.preventDefault();
            keyRight();
        }else if(e.keyCode === 37 || e.keyCode === 65) {
            e.preventDefault();
            keyLeft();
        }else if(e.keyCode === 38 || e.keyCode === 87) {
            e.preventDefault();
            keyUp();
        }else if(e.keyCode === 40 || e.keyCode === 83) {
            e.preventDefault();
            keyDown();
        }
        updateBG();
    });

    //check for win... literally
    function checkForWin() {
        for (let i = 0; i < width * width; i++) {
            if (squares[i].html() == 2048){
                //this is what happens when you win
                
                resultDisplay.html("You won.");
            }
        }
    }

    //check for lose... literally
    function checkForLose() {
        let lost = true;
        for (let i = 0; i < width * width; i++) {
            if (squares[i].html() == 0){
                lost = false;
            }
        }
        if (lost === true) {
            //this is what happens when you lose
        }
    }


































});