//Make new here? make a slide instead. Make sure all squares are actually square.
function createGrid(n){
    n = n*n;
    for (let i=0;i<n;i++){
        grids.appendChild(grid.cloneNode());
    }
}
//can make an if "click" is true then do the function. In order to have a press and relase tpye of drawing.
function hoverFunction(){
    selectAllGrids.forEach(item => {
        item.addEventListener('mouseover', () =>{       //change to 'mouseover' later!
            item.classList.replace('grid', 'hovdiv');
        })
    });
}


const grid = document.createElement('div');
grid.classList.add('grid');
const grids = document.querySelector('.grids');
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => location.reload());
const colorpicker = document.querySelector('#colorpicker');

//Disse 3 linjene fungerer ikke! (eventuelt noe rekkefølge i tillegg)
colorpicker.addEventListener('input', e => console.log(colorpicker.value));
document.querySelectorAll('.hovdiv').forEach(item => {
    item.style.backgroundColor = colorpicker.value;
})

//Programflow:
createGrid(64);
const selectAllGrids = document.querySelectorAll('.grid');
hoverFunction();

//TODO
//Make 3 options: one with 500grids and min widt 5%.
//  one with 2500grids and width 2%
// one with 5000grids and width 1%

//Make "clear key!"
//also: COLORS! (make cool color selection wheel?)
//also: ERASER (aka white color!)