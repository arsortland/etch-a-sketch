// make a function with one argument for number of grids?

function createGrid(){
    for (let i=0;i<16;i++){
        grids.appendChild(grid.cloneNode());

    }
}

function hoverFunction(){
    grid.classList.replace('grid', 'hovdiv');
}


const grid = document.createElement('div');
grid.classList.add('grid');
const grids = document.querySelector('.grids');

createGrid();
grid.addEventListener('click', hoverFunction);
//Make it so that click-event triggers background color change!