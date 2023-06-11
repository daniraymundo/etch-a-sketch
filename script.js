const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
let squares = [];

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

    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            square.classList.add("colored-black");
        });
    });
}

createGrid(16);

resetButton.addEventListener("click", event => {
    let size = prompt("Enter a number between 2 and 100. This will be the grid size.");
    if (size >= 2 && size <= 100) {
        createGrid(size);
    } else {
        size = prompt("Invalid input. Minimum size is 2x2. Maximum size is 100x100. Enter another number.");
        createGrid(size);
    };
    squares.forEach(square => {
        square.classList.remove("colored-black");
    })
});