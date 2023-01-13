
function draw(e){
    let sqr = document.querySelectorAll('.square');
    
    sqr.addEventListener('click',function(e) {
        sqr.classList.add('drawing');
    })
}

let gridSize = document.querySelector(':root');

function drawGrid(size)
{
    let grid = document.querySelector('.container');

    gridSize.style.setProperty('--grid-size',size);
    for (let i = 0 ; i < size*size ; i++)
    {
        let elem = document.createElement('div');
        elem.classList.add('square');
        grid.appendChild(elem);
    }

    grid.addEventListener('mouseover',draw );
    

}

drawGrid(16);
