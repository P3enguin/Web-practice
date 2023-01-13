

function drawGrid(rows,columns)
{
    let grid = document.querySelector('.container');

    grid.style.setProperty('--columns-numbers',columns);
    grid.style.setProperty('--row-numbers',rows);
    
    for (let i = 0 ; i < rows*columns ; i++)
    {
        let elem = document.createElement('div');
        elem.classList.add('square');
        grid.appendChild(elem);
    }
}
    


drawGrid(16,16);