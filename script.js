const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const customButton = document.querySelector(".custom");
const blackButton = document.querySelector(".black");
const randomButton = document.querySelector(".random");
const eraserButton = document.querySelector(".eraser");
const sizeSelector = document.querySelector("#size-selector");
const inputMessage = document.querySelector(".input-message");
const colorPicker = document.querySelector("#color-picker");
let squares = [];
let currentMode = "default";
let selectedColor = "#FF0000";
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

customButton.addEventListener("click", event => {
    currentMode = "custom";
    displayActiveMode();
});

blackButton.addEventListener("click", event => {
    currentMode = "black";
    displayActiveMode();
});

randomButton.addEventListener("click", event => {
    currentMode = "random";
    displayActiveMode();
});

eraserButton.addEventListener("click", event => {
    currentMode = "eraser";
    displayActiveMode();
});

colorPicker.addEventListener("change", event => selectedColor = event.target.value);

resetButton.addEventListener("click", event => {
    currentMode = "default";
    createGrid(16);
    inputMessage.textContent = "Current grid size: 16 x 16";
    sizeSelector.value = "";
    colorPicker.value = "#FF0000";
});

sizeSelector.addEventListener("input", event => {
    let size = sizeSelector.value;
    inputMessage.textContent = `Current grid size: ${size} x ${size}`
    createGrid(size);
});

function drawOnHover(event) {
    if (gridActive) {
        if (currentMode === "black") {
            event.target.style.backgroundColor = "black";
        } else if (currentMode === "random") {
            const red = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else if (currentMode === "eraser") {
            event.target.removeAttribute("style");
        } else if (currentMode === "custom") {
            event.target.style.backgroundColor = selectedColor;
        }
    }
    
};

function drawOnClick(event) {
    if (currentMode === "black") {
        event.target.style.backgroundColor = "black";
    } else if (currentMode === "random") {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (currentMode === "eraser") {
        event.target.removeAttribute("style");
    } else if (currentMode === "custom") {
        event.target.style.backgroundColor = selectedColor;
    }
};

function displayActiveMode() {
    const buttons = {
        black: blackButton,
        custom: customButton,
        random: randomButton,
        eraser: eraserButton
    };

    Object.keys(buttons).forEach(mode => {
        const button = buttons[mode];
        if (currentMode === mode) {
            button.classList.add("active-mode");
        } else {
            button.classList.remove("active-mode");
        }
    })
};