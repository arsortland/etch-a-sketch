// make a function with one argument for number of grids?

function createGrid(){
    for (let i=0;i<16;i++){
        grids.appendChild(grid.cloneNode());
        grid.textContent = "test";
        console.log(grid.cloneNode());
    }
}

const grid = document.createElement('div');
grid.classList.add('grid');

const grids = document.querySelector('.grids');

createGrid();