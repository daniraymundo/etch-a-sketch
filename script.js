const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "grid-square";
    gridContainer.appendChild(square);
};

const squares = document.querySelectorAll(".grid-square");

squares.forEach(square => {
    square.addEventListener("mouseover", event => {
        square.classList.add("colored");
    });
});