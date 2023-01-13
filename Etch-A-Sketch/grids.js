const gridContainer = document.querySelector('.container');
let gridSizeVariable = document.querySelector(':root');
let flag = false;


function draw(){
    console.log(this);
    console.log(flag);
    if (!flag)
        return;
    this.classList.add('drawing');
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
    sqr.forEach(elem2 => elem2.addEventListener('mousedown',function() {
        elem2.classList.add('drawing');
    }));
 
}

drawGrid(16);
