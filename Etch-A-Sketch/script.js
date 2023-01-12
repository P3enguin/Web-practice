let grid = document.querySelector('.container');

for (let i = 0 ; i < 256 ; i++)
{
    let elem = document.createElement('div');
    elem.classList.add('row');
    grid.appendChild(elem);
}