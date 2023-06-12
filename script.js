const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
let squares = [];
let blackModeEnabled = false;
let rainbowModeEnabled = false;

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridArea = size * size

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.className = "grid-square";
        gridContainer.appendChild(square);
    };

    squares = document.querySelectorAll(".grid-square");
};

createGrid(16);

function enableBlackMode() {
    blackModeEnabled = true;
    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            if (blackModeEnabled) {
                square.style.backgroundColor = "black";
            };
        });
    });
};

blackButton.addEventListener("click", event => {
    enableBlackMode();
});

function disableBlackMode() {
    blackModeEnabled = false;
    squares.forEach(square => {
        square.removeAttribute("style");
    });
};

function enableRainbowMode() {
    rainbowModeEnabled = true;
    squares.forEach(square => {
        let passCount = 0;
        square.addEventListener("mouseover", event => {
            if (rainbowModeEnabled) {
                const red = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            };
        });
    });
};

rainbowButton.addEventListener("click", event => {
    enableRainbowMode();
});

function disableRainbowMode() {
    rainbowModeEnabled = false;
    squares.forEach(square => {
        square.removeAttribute("style");
    });
};

function enableEraser() {
    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            square.removeAttribute("style");
        });
    });
};

eraserButton.addEventListener("click", event => {
    enableEraser();
});

resetButton.addEventListener("click", event => {
    disableBlackMode();
    disableRainbowMode();
    let size = prompt("Enter a number between 2 and 100. This will be the grid size.");
    while (isNaN(size) || size < 2 || size > 100) {
        size = prompt("Invalid input. Minimum size is 2x2. Maximum size is 100x100. Enter a number between 2 and 100.");
    };

    createGrid(size);

});