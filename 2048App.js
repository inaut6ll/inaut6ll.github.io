document.addEventListener("DOMContentLoaded", () => {
    const gridDisplay = $(".grid");
    const scoreDisplay = $("#score");
    const resultDisplay = $("#result");
    const width = 4;
    let squares = [];

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
            squares[r].html("2");
        }else {
            gen();
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
                let total = parseInt(squares[i].html()) + parseInt(squares[i + 1].html());
                squares[i].html(0);
                squares[i + 1].html(total);
                a = true; //a combination happened
            }
        }
        return a;
    }

    //combine row for when move left
    function combineLeft() {
        let a = false;
        for (let i = 0; i < width * width - 1; i++) {
            if ((i + 1) % width !== 0 && squares[i].html() != 0 && squares[i].html() == squares[i + 1].html()){
                let total = parseInt(squares[i].html()) + parseInt(squares[i + 1].html());
                squares[i].html(total);
                squares[i + 1].html(0);
                a = true; //a combination happened
            }
        }
        return a;
    }

    function keyRight() {
        moveRight();
        combineRight();
        moveRight();
        gen();
    };

    function keyLeft() {
        moveLeft();
        combineLeft();
        moveLeft();
        gen();
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
                let total = parseInt(squares[i].html()) + parseInt(squares[i + width].html());
                squares[i].html(total);
                squares[i + 4].html(0);
                a = true; //a combination happened
            }
        }
        return a;
    };

    //combine col for when move down
    function combineDown() {
        let a = false;
        for (let i = width * (width - 1) - 1; i >= 0; i--) {
            if(squares[i].html() != 0 && squares[i].html() === squares[i + width].html()){
                let total = parseInt(squares[i].html()) + parseInt(squares[i + width].html());
                squares[i].html(0);
                squares[i + 4].html(total);
                a = true; //a combination happened
            }
        }
        return a;
    };

    function keyUp() {
        moveUp();
        combineUp();
        moveUp();
        gen();
    };

    function keyDown() {
        moveDown();
        combineDown();
        moveDown();
        gen();
    };

    $(document).keydown((e) => {
        if(e.keyCode === 39) {
            keyRight();
        }else if(e.keyCode === 37) {
            keyLeft();
        }else if(e.keyCode === 38) {
            keyUp();
        }else if(e.keyCode === 40) {
            keyDown();
        }
    });

























});