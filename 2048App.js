document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = $(".grid");
    const scoreDisplay = $("#score");
    const highDisplay = $("#highscore");
    const resultDisplay = $("#result");
    const width = 4;
    let squares = [];
    let theme = "boring";
    let score = 0;
    if (localStorage.getItem("high") === null){
        localStorage.setItem("high", 0);
    }else{
        highDisplay.html(localStorage.getItem("high"));
    }

    //create the playing board
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
            checkForLose();
        }
    };

    function keyLeft() {
        let a = moveLeft();
        let b = combineLeft();
        let c = moveLeft();
        if (a || b || c){
            gen();
            checkForLose();
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
            checkForLose();
        }
    };

    function keyDown() {
        let a = moveDown();
        let b = combineDown();
        let c = moveDown();
        if (a || b || c){
            gen();
            checkForLose();
        }
    };

    //update tile backgrounds
    function updateBG() {
        for (let i = 0; i < width * width; i++) {
            if(squares[i].html() == 0){
                if(theme === "r"){
                    let random = Math.floor(Math.random() * 253);
                    let random2 = Math.floor(Math.random() * 253);
                    let random3 = Math.floor(Math.random() * 253);
                    $(".grid").css("background", "linear-gradient(135deg, rgb(" + random + ", " + random2 + ", " + random3 + "), rgb(" + random2 + ", " + random3 + ", " + random + "))");
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "white");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    let random = Math.floor(Math.random() * 253);
                    let random2 = Math.floor(Math.random() * 253);
                    let random3 = Math.floor(Math.random() * 253);
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "rgb(" + random + ", " + random2 + ", " + random3 + ")");
                    squares[i].css("border", "");
                }  
                if(theme === "q"){
                    let random = Math.floor(Math.random() * 253);
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "rgb(" + random + ", " + random + ", " + random + ")");
                    squares[i].css("border", "");
                }  
                if(theme === "gray"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "lightgray");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "white");
                    squares[i].css("border", "5px solid white");
                }  
            }else if(squares[i].html() == 2){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r1-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face1-2048.png)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(250, 175, 187), rgb(178, 250, 250))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(ann1-2048.jpg)");
                    squares[i].css("border", "5px outset white");
                }
            }else if(squares[i].html() == 4){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r2-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face2-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(255, 0, 0), rgb(251, 255, 0))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(agnes1-2048.jpg)");
                    squares[i].css("border", "5px outset lightgreen");
                }
            }else if(squares[i].html() == 8){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r3-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face3-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(251, 255, 0),  rgb(202, 255, 133), rgb(60, 255, 0))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(linda1-2048.jpg)");
                    squares[i].css("border", "5px outset lightblue");
                }
            }
            else if(squares[i].html() == 16){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r4-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face4-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(251, 255, 0), rgb(255, 111, 248))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(abby-2048.jpg)");
                    squares[i].css("border", "5px outset rgb(44, 253, 2)");
                }
            }else if(squares[i].html() == 32){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r5-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face5-2048.png)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(199, 255, 162), rgb(0, 204, 255), blue)");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(joyce-2048.jpg)");
                    squares[i].css("border", "5px outset violet");
                }
            }else if(squares[i].html() == 64){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r6-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face6-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, white, rgb(203, 255, 169),  rgb(162, 0, 255), black)");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(jieg1-2048.jpg)");
                    squares[i].css("border", "5px outset darkgray");
                }
            }else if(squares[i].html() == 128){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r7-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face7-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(255, 0, 242), rgb(255, 141, 255), rgb(253, 225, 229))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(ann2-2048.jpg)");
                    squares[i].css("border", "5px outset rgb(234, 0, 255)");
                }
            }else if(squares[i].html() == 256){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r8-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face8-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(229, 255, 0), rgb(0, 255, 255), rgb(255, 66, 223))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(agnes2-2048.jpg)");
                    squares[i].css("border", "5px outset rgb(2, 238, 255)");
                }
            }else if(squares[i].html() == 512){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r9-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face9-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "black");
                    squares[i].css("background", "linear-gradient(135deg, black, white, black)");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(linda2-2048.jpg)");
                    squares[i].css("border", "5px outset red");
                }
            }else if(squares[i].html() == 1024){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r10-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face10-2048.png)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, black, rgb(48, 0, 0), rgb(170, 0, 0), red, red)");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(ann3-2048.jpg)");
                    squares[i].css("border", "5px double white");
                }
            }else if(squares[i].html() == 2048){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r11-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(troll-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "black");
                    squares[i].css("background", "linear-gradient(135deg, rgb(250, 126, 126), rgb(255, 209, 125), rgb(250, 250, 121), rgb(174, 245, 174), rgb(161, 161, 248), rgb(205, 133, 247))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(troll-2048.jpg)");
                    squares[i].css("border", "5px double black");
                }
            }else if(squares[i].html() == 4096){
                if(theme === "r"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(r12-2048.jpg)");
                    squares[i].css("border", "");
                }  
                if(theme === "faces"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(face12-2048.jpg)");
                    squares[i].css("border", "2px solid black");
                } 
                if(theme === "q"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(q-2048.jpg)");
                    squares[i].css("border", "");
                } 
                if(theme === "gray"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "linear-gradient(135deg, rgb(255, 0, 0), orange, yellow, rgb(2, 238, 255), blue, rgb(234, 0, 255))");
                    squares[i].css("border", "");
                }  
                if(theme === "boring"){
                    squares[i].css("color", "white");
                    squares[i].css("background", "black");
                    squares[i].css("border", "");
                }  
                if(theme === "ann"){
                    squares[i].css("color", "transparent");
                    squares[i].css("background", "url(me-2048.jpg)");
                    squares[i].css("border", "100px double black");
                }
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

    let won = false;
    //check for win... literally
    function checkForWin() {
        for (let i = 0; i < width * width; i++) {
            if (won === false && squares[i].html() == 2048){
                //this is what happens when you win
                won = true;
                $("#winlose").html("You won!");
                $("#keep-going").html("Keep Going");
                resultDisplay.fadeIn(1000);
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
        for (let i = 0; i < width * (width - 1); i++) { //check if there are possible vertical combos
            if(squares[i].html() != 0 && squares[i].html() === squares[i + width].html()){
                lost = false;
            }
        }
        for (let i = 0; i < width * width - 1; i++) { //check if there are possible horizontal combos
            if ((i + 1) % width !== 0 && squares[i].html() != 0 && squares[i].html() == squares[i + 1].html()){
                lost = false;
            }
        }
        if (lost === true) {
            //this is what happens when you lose
            $("#winlose").html("Game over.");
            $("#keep-going").html("Ok, Cool.");
            resultDisplay.fadeIn(1000);
        }
    }

    function reset() {
        for (let i = 0; i < width * width; i++) {
            squares[i].html(0);
        }
        score = 0;
        scoreDisplay.html(0);
        gen();
        gen();
        updateBG();
        resultDisplay.fadeOut(1000);
    };
    $("#new-game").click(reset);
    $("#play-again").click(reset);

    $("#keep-going").click(() => {
        resultDisplay.fadeOut(1000);
    });

    $("#theme-button").click(() => {
        $("#themes").fadeIn();
        $("#info-box").fadeOut();
    });

    $("#info").click(() => {
        $("#themes").fadeOut();
        $("#info-box").fadeIn();
    });

    $(".close").click(() => {
        $("#themes").fadeOut();
        $("#info-box").fadeOut();
    });

    $("#gray").click(() => {
        theme = "gray";
        $(".grid").css("background", "linear-gradient(white, white)");
        updateBG();

        $("#gray").css("color", "rgb(214, 154, 42)");
        $("#gray").css("font-weight", "bolder");
        $("#gray").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#boring").click(() => {
        theme = "boring";
        $(".grid").css("background", "linear-gradient(white, white)");
        updateBG();

        $("#boring").css("color", "rgb(214, 154, 42)");
        $("#boring").css("font-weight", "bolder");
        $("#boring").css("text-decoration" ,"underline overline");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" ,"none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#food").click(() => {
        theme = "food";
        $(".grid").css("background", "linear-gradient()");
        updateBG();

        $("#food").css("color", "rgb(214, 154, 42)");
        $("#food").css("font-weight", "bolder");
        $("#food").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#random").click(() => {
        theme = "r";
        $(".grid").css("background", "linear-gradient()");
        updateBG();

        $("#random").css("color", "rgb(214, 154, 42)");
        $("#random").css("font-weight", "bolder");
        $("#random").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" , "none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#q").click(() => {
        theme = "q";
        $(".grid").css("background", "black");
        updateBG();

        $("#q").css("color", "rgb(214, 154, 42)");
        $("#q").css("font-weight", "bolder");
        $("#q").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#faces").click(() => {
        theme = "faces";
        $(".grid").css("background", "white");
        updateBG();

        $("#faces").css("color", "rgb(214, 154, 42)");
        $("#faces").css("font-weight", "bolder");
        $("#faces").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
        $("#ann").css("color", "black");
        $("#ann").css("font-weight", "normal");
        $("#ann").css("text-decoration" ,"none");
    });

    $("#ann").click(() => {
        theme = "ann";
        $(".grid").css("background", "linear-gradient(135deg, rgb(255, 0, 0), orange, yellow, rgb(2, 238, 255), blue, rgb(234, 0, 255))");
        updateBG();

        $("#ann").css("color", "rgb(214, 154, 42)");
        $("#ann").css("font-weight", "bolder");
        $("#ann").css("text-decoration" ,"underline overline");
        $("#boring").css("color", "black");
        $("#boring").css("font-weight", "normal");
        $("#boring").css("text-decoration" ,"none");
        $("#gray").css("color", "black");
        $("#gray").css("font-weight", "normal");
        $("#gray").css("text-decoration" ,"none");
        $("#random").css("color", "black");
        $("#random").css("font-weight", "normal");
        $("#random").css("text-decoration" , "none");
        $("#food").css("color", "black");
        $("#food").css("font-weight", "normal");
        $("#food").css("text-decoration" ,"none");
        $("#faces").css("color", "black");
        $("#faces").css("font-weight", "normal");
        $("#faces").css("text-decoration" ,"none");
        $("#q").css("color", "black");
        $("#q").css("font-weight", "normal");
        $("#q").css("text-decoration" ,"none");
    });

    
































});