const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
let squares = [];
let blackModeEnabled = false;

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
                square.classList.add("colored-black");
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
        square.classList.remove("colored-black");
    });
};


resetButton.addEventListener("click", event => {
    disableBlackMode();
    let size = prompt("Enter a number between 2 and 100. This will be the grid size.");
    while (isNaN(size) || size < 2 || size > 100) {
        size = prompt("Invalid input. Minimum size is 2x2. Maximum size is 100x100. Enter a number between 2 and 100.");
    };

    createGrid(size);
    
});