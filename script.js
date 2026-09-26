let grid = document.querySelector(".grid-container");

function addGrid(num) {
    grid.innerHTML = "";
    for (let i = 0; i < (num * num); i++) {
        let box = document.createElement("div");
        box.classList.add("grid");
        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "black";
        });
        box.style.width = (960 / num) + "px";
        box.style.height = (960 / num) + "px";
        // box.addEventListener("mouseout", function() {
        //     box.style.backgroundColor = "aquamarine";
        // });
        grid.appendChild(box);
    }
}

addGrid(16);

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function () {
    let boxes = document.getElementsByClassName("grid");
    for (let box of boxes) {
        box.style.backgroundColor = "aquamarine";
    }
});

let changeButton = document.querySelector(".change-button");
changeButton.addEventListener("click", function () {
    let boxSize = prompt("how many boxes do you want?", "16");
    if (boxSize === null) {
        return;
    } else {
        if (isNaN(boxSize) || boxSize > 100 || boxSize < 1) {
            alert("wrong value, max size 100, min size 1");
        } else {
            addGrid(boxSize);
        }
    }
});