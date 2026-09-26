let grid = document.querySelector(".grid-container");

function addGrid(num) {
    grid.innerHTML = "";
    for (let i = 0; i < (num * num); i++) {
        let box = document.createElement("div");
        box.classList.add("grid");
        box.style.opacity = "0.4";
        box.addEventListener("mouseover", function () {
            let boxOpacity = Number(box.style.opacity);
            if (boxOpacity < 1) {
                boxOpacity = boxOpacity + 0.1;
            }
            box.style.opacity = boxOpacity;
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
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
        box.style.backgroundColor = "gainsboro";
        box.style.opacity = "0.4";
    }
});

let changeButton = document.querySelector(".change-button");
changeButton.addEventListener("click", function () {
    let boxSize = prompt("how many boxes in a row do you want?", "16");
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