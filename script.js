let grid = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    let box = document.createElement("div");
    box.classList.add("grid");
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "black";
    });
    // box.addEventListener("mouseout", function() {
    //     box.style.backgroundColor = "aquamarine";
    // });
    grid.appendChild(box);
}

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function() {
    let boxes = document.getElementsByClassName("grid");
    for (let box of boxes) {
        box.style.backgroundColor = "aquamarine";
    }
});