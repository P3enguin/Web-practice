function removeGrid()
{
    let grid = document.querySelectorAll('.square');
    grid.forEach((elem) => {
        elem.remove('div');
    })
    
}

let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');

button1.addEventListener('click', function(e) {
    let nbr = prompt("give a number");
    if (!nbr)
        return;
    console.log(nbr);
    removeGrid();
    drawGrid(nbr);
});

button2.addEventListener('click',function(e) {
    let drawing = document.querySelectorAll('.square');
    console.log(drawing);
    drawing.forEach((elem) => {
        elem.style.background = "white";
    })
});