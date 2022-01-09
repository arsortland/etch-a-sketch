
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
                if (isMouseDown === true){
                    if (colorsEverywhere === true){
                        item.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                        document.querySelectorAll('.eraser, .random, .greyblack, #colorpicker').forEach(btn =>{
                            btn.addEventListener('click', () => {
                                colorsEverywhere = false;
                            })
                        });
                        
                    }if (greyToBlack === true){
                        item.style.backgroundColor = "black";
                        item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.1;
                        document.querySelectorAll('.eraser, .random, .rainbow, #colorpicker').forEach(btn => {
                            btn.addEventListener('click', () => {
                                greyToBlack = false;
                            })
                        }); 
                    }if (colorsEverywhere === false && greyToBlack === false){
                        item.style.backgroundColor = colorpicker.value;
                    }
                }
            })
        });
}

//Selectors:
const grid = document.createElement('div');
grid.classList.add('grid');
const grids = document.querySelector('.grids');
const rowcol = document.getElementById("rowcol");
const body = document.querySelector('body');

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
window.addEventListener('mouseup', () => isMouseDown = false);
const hover = document.querySelector('.hover');
hover.addEventListener('click', () => isMouseDown = true);
const hold = document.querySelector('.hold');
hold.addEventListener('click', () => isMouseDown = false);

//Random color:
const random = document.querySelector('.random');
random.addEventListener('click', () => colorpicker.value = "#" + Math.floor(Math.random()*16777215).toString(16));
//rainbowcolors:
let colorsEverywhere = false;
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => colorsEverywhere = true);
//gradient black:
let greyToBlack = false;
const greyblack = document.querySelector('.greyblack');
greyblack.addEventListener('click', () => greyToBlack = true);

//gradient colorschemes and design/CSS left!
