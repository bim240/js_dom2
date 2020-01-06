var add  = document.querySelector('.add ');
var sub = document.querySelector('.sub ');
var reset= document.querySelector('.reset '); 
var result = document.querySelector('.result');
var resultstore = 0;


function increase() {
    resultstore += 1;
    result.innerHTML = resultstore;
}
function decrease() {
    resultstore -= 1;
    result.innerHTML = resultstore;
}
function reset0() {
    resultstore = 0;
    result.innerHTML = resultstore;
}


add.addEventListener('click', increase);
sub.addEventListener('click', decrease);
reset.addEventListener('click', reset0);