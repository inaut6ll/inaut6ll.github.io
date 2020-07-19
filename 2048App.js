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
        for (let i = 0; i < width * width; i++){
            if (i % 4 === 0){
                let one = squares[i].html();
                let two = squares[i + 1].html();
                let three = squares[i + 2].html();
                let four = squares[i + 3].html();
                row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)];

                console.log(row);

                let filteredRow = row.filter(num => num);
                console.log(filteredRow);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                console.log(zeros);
                let newRow = zeros.concat(filteredRow);
                console.log(newRow);

                squares[i].html(newRow[0]);
                squares[i + 1].html(newRow[1]);
                squares[i + 2].html(newRow[2]);
                squares[i + 3].html(newRow[3]);
            }
        }
    };

    moveRight();





});