var selectedColor = "black";
const colorPicker = document.getElementById("picker");
const grid = document.getElementById("canvas");
let gridchildren = document.getElementsByClassName("dot");
const gridSize = document.getElementById("selector");
const button = document.getElementById("reset");

button.addEventListener("click", () => {
    clearGrid();
});


for (let index = 1; index < 17; index++) {
    option = document.createElement("option");
    option.attributes.value = index;
    option.innerText = index;
    gridSize.append(option);
}

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
});

for (let index = 0; index < 25; index++) {
    divy = document.createElement("div");
    divy.className = "dot";
    grid.append(divy);
}

function redoEvents(){
    Array.from(gridchildren).forEach(element => {
        element.addEventListener("click", (e) => {
            e.target.style.backgroundColor = selectedColor;
        })
    })
}

gridSize.addEventListener("input", () => {
    gridSizeChange(parseInt(gridSize.value));
});

function clearGrid(){
    Array.from(gridchildren).forEach(element => {
        element.style.backgroundColor = "white";
    })
}

function gridSizeChange(size){
    let tiles = size*size;
    while(grid.children.length != tiles){
        if (grid.children.length < tiles){
            divy = document.createElement("div");
            divy.className = "dot";
            grid.append(divy);
        }
        else {
            grid.removeChild(grid.lastChild);
        }
        
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        
    }
    
    clearGrid();
    redoEvents();
    
}

gridSizeChange(6);

gridSize.selectedIndex = 5;
