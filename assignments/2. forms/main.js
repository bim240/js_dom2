var editinput = document.querySelectorAll('.editinput')
var submit = document.querySelector('.submit');
// var alert = document.querySelectorAll('.alert');

// div.className = 'alert';
// let divp = document.querySelector('.alert');
// console.log(div);
// let div = document.querySelectorAll(".alert").forEach(item => 
    let div = document.querySelectorAll(".alert");

submit.addEventListener('click', checkEmpty);

function checkEmpty(){
    var key = true;

    for(let i=0; i< editinput.length; i++) {
        // if (i.value  == ''){
            // console.log(editinput[i]);
            console.log(i)
            // div[i].textContent = `${editinput[i].value} can't be empty!`;
            // item.textContent = `${i.value} can't be empty!`);
            // setTimeout(document.querySelectorAll(".alert").forEach(i => i.textContent = ""), 10000);
            // console.log(div);
            // console.dir(i);
            // key = false;
            // break;
        // }
    }

    // if(!key){
    //     break;
    // }
}