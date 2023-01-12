let sqr = document.querySelectorAll('.square');

function draw(e){
    console.log(this.classList.value);
    this.classList.add('drawing');
    

}

sqr.forEach(hh => hh.addEventListener('mouseover',draw ));