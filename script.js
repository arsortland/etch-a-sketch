
function createGrid(n){
    rowcol.style.gridTemplateColumns =`repeat(${n}, 1fr)`;
    rowcol.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let gridsize = 100*100;
    for (let i=0;i<gridsize;i++){
        grids.appendChild(grid.cloneNode());
    }
}
//can make an if "click" is true then do the function. In order to have a press and relase tpye of drawing.
function hoverFunction(){
    selectAllGrids.forEach(item => {
        item.addEventListener('mouseover', () =>{
            item.style.backgroundColor = colorpicker.value;  
        })
    });
}

//Selectors:
const grid = document.createElement('div');
grid.classList.add('grid');
const grids = document.querySelector('.grids');
const rowcol = document.getElementById("rowcol");

//clear key:
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => location.reload());

//Eraser:
const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => colorpicker.value = '#FFFFFF');

//Slider:
const mySlider = document.getElementById('mySlider');
const slidetext = document.querySelector('.slidetext');
slidetext.textContent = mySlider.value +"x"+mySlider.value;
mySlider.oninput = () => slidetext.textContent = mySlider.value+"x"+mySlider.value;

//Colorpicker:
const colorpicker = document.querySelector('#colorpicker');

//Programflow:
createGrid(mySlider.value);
mySlider.addEventListener('mouseup', () => createGrid(mySlider.value));
const selectAllGrids = document.querySelectorAll('.grid');
hoverFunction();

//TODO
//also: ERASER (aka white color!)