const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const inputBox = document.querySelector(".input-box")
const inputMessage = document.querySelector(".input-message")
let squares = [];
let currentMode = "default";
let gridActive = false;

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridArea = size * size

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.className = "grid-square";
        square.addEventListener("mouseover", drawOnHover);
        square.addEventListener("click", drawOnClick);
        gridContainer.appendChild(square);
    };

    squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => square.removeAttribute("style"));
};

createGrid(16);

gridContainer.addEventListener("click", event => gridActive = !gridActive);

blackButton.addEventListener("click", event => currentMode = "black");

rainbowButton.addEventListener("click", event => currentMode = "rainbow");

eraserButton.addEventListener("click", event => currentMode = "eraser");

resetButton.addEventListener("click", event => {
    currentMode = "default";
    createGrid(16);
    inputMessage.textContent = "Current grid size: 16 x 16 \nEnter number between 2 and 100 to change grid size. ";
    inputBox.value = "";
});

inputBox.addEventListener("input", event => {
    let size = inputBox.value;
    if (size >= 2 && size <= 100) {
        inputMessage.textContent = `\u00A0\nCurrent grid size: ${size} x ${size}`
        createGrid(size);
    } else {
        inputMessage.textContent = "Invalid input.\nGrid size has been set to default (16x16)."
        createGrid(16);
    };
});

function drawOnHover(event) {
    if (gridActive) {
        if (currentMode === "black") {
            event.target.style.backgroundColor = "black";
        } else if (currentMode === "rainbow") {
            const red = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else if (currentMode === "eraser") {
            event.target.removeAttribute("style");
        }
    }
    
}

function drawOnClick(event) {
    if (currentMode === "black") {
        event.target.style.backgroundColor = "black";
    } else if (currentMode === "rainbow") {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (currentMode === "eraser") {
        event.target.removeAttribute("style");
    }
}
