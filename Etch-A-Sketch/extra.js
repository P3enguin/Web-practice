function removeGrid()
{
    let grid = document.querySelectorAll('.square');
    grid.forEach((elem) => {
        elem.remove('div');
    })
    
}

let button = document.querySelector('button');

button.addEventListener('click', function(e) {
    let nbr = prompt("give a number");
    console.log(nbr);
    removeGrid();
    drawGrid(nbr);
});
