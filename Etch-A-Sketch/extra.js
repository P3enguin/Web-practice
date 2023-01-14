function removeGrid()
{
    let grid = document.querySelectorAll('.square');
    grid.forEach((elem) => {
        elem.remove('div');
    })
    
}


let button = document.querySelector('#btn2');
let slider = document.querySelector("#slider");


button.addEventListener('click',function(e) {
    let drawing = document.querySelectorAll('.square');

    drawing.forEach((elem) => {
        elem.style.background = "white";
    })
});

slider.addEventListener('mouseup',function(e) {
    removeGrid();
    drawGrid(parseInt(slider.value));
    document.querySelector(".grid-value").innerHTML = `${slider.value}x${slider.value}`;
});