
function createGrid(n){
    rowcol.style.gridTemplateColumns =`repeat(${n}, 1fr)`;
    rowcol.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let gridsize = 100*100;
    for (let i=0;i<gridsize;i++){
        grids.appendChild(grid.cloneNode());
    }
}

function hoverFunction(){
        selectAllGrids.forEach(item => {
            item.addEventListener('mouseover', () =>{
                if (isMouseDown ===true){
                    item.style.backgroundColor = colorpicker.value; 
                }

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


//Initiering:
createGrid(mySlider.value);
mySlider.addEventListener('mouseup', () => createGrid(mySlider.value));
const selectAllGrids = document.querySelectorAll('.grid');
hoverFunction();
//Hold/hover functionality.
let isMouseDown = false;
window.addEventListener('mousedown', () => isMouseDown =true);
//window.addEventListener('mouseup', () => isMouseDown = false);
const hover = document.querySelector('.hover');
hover.addEventListener('click', () => isMouseDown = true);
const hold = document.querySelector('.hold');
hold.addEventListener('click', () => isMouseDown = false);
//Random color:
const random = document.querySelector('.random');
random.addEventListener('click', () => colorpicker.value = "#" + Math.floor(Math.random()*16777215).toString(16));

//gradient colorschemes and design/CSS left!