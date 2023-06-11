const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridArea = size * size

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.className = "grid-square";
        gridContainer.appendChild(square);
    };
}

createGrid(16);

const squares = document.querySelectorAll(".grid-square");

squares.forEach(square => {
    square.addEventListener("mouseover", event => {
        square.classList.add("colored-black");
    });
});