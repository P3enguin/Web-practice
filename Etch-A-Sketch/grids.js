const gridContainer = document.querySelector('.container');
let gridSizeVariable = document.querySelector(':root');
let colorPal = document.getElementById('color-picker');
let flag = false;


function draw(){
    if (!flag)
        return;
    this.style.background = colorPal.value;
}


function drawClick() {
   this.style.background = colorPal.value;
}

gridContainer.addEventListener('mousedown',function(){
    flag = true;
})

gridContainer.addEventListener('mouseup',function(){
    flag = false;
})

function drawGrid(size){
    let grid = document.querySelector('.container');

    gridSizeVariable.style.setProperty('--grid-size',size);
    for (let i = 0 ; i < size*size ; i++)
    {
        let elem = document.createElement('div');
        elem.classList.add('square');
        grid.appendChild(elem);
    }

    let sqr = document.querySelectorAll('.square');
    

    sqr.forEach(elem => elem.addEventListener('mouseover',draw));
    /*Triggering the first click*/
    sqr.forEach(elem2 => elem2.addEventListener('mousedown',drawClick));
 
}

drawGrid(16);
