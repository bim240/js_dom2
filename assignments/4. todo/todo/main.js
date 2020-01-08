// var link = document.createElement('link');
// link.href = 'style.css';
// import style.css


var listInput = document.querySelector('input');
var ul = document.querySelector('ul');
var footerDisplay = document.querySelector(".display");
var activetask = document.querySelectorAll('.activetask').length;
var completedtask = document.querySelectorAll('.completedtask').length;
var itemleft = document.querySelector('.itemleft');
var all = document.querySelector('.all');
var activeli = document.querySelector('.active');
var completedli = document.querySelector('.complete');  
var clearall =document.querySelector('.clearall')

//  task info
all.addEventListener('click', viewAllList);
activeli.addEventListener('click', viewActiveList);
completedli.addEventListener('click', viewCompleteList);
console.dir(document.querySelectorAll('.activetask'));

function viewAllList (event) {
    // document.querySelectorAll('.activetask').style.display = 'flex';
    // document.querySelectorAll('.completedtask').style.display = 'flex'; 
    for (let i of document.querySelectorAll('.activetask')){
        i.style.display = 'flex';
    }
    for (let i of document.querySelectorAll('.completedtask')){
        i.style.display = 'flex';
    }
    // console.dir(document.querySelectorAll('.activetask'));
}
function viewActiveList (event) {
    // document.querySelectorAll('.activetask').style.display = 'flex';
    // document.querySelectorAll('.completedtask').style.display = 'none'; 
    for (let i of document.querySelectorAll('.activetask')){
        i.style.display = 'flex';
    }
    for (let i of document.querySelectorAll('.completedtask')){
        i.style.display = 'none';
    }
}
function viewCompleteList (event) {
    // document.querySelectorAll('.activetask').style.display = 'flex';
    // document.querySelectorAll('.completedtask').style.display = 'none'; 
    for (let i of document.querySelectorAll('.activetask')){
        i.style.display = 'none';
    }
    for (let i of document.querySelectorAll('.completedtask')){
        i.style.display = 'flex';
    }
}


// clear all if all the task are comoleted
clearall.addEventListener('click', clearalltask);
function clearalltask(){
        ul.innerHTML = "";
        footerDisplay.style.display = 'none';
}



// console.log (active.length);


// add to list
function addlist (event) {
    console.dir(event);
    if(event.keyCode === 13 && event.target.value != ''){
        // li
        var li = document.createElement('li');
        li.className='flex activetask';

        // checkbox
        var checkBox = document.createElement('input');
        checkBox.classList.add('checkbox');
        checkBox.type = 'checkbox';

        // para
        var p = document.createElement('p');
        p.classList.add('para');
        p.textContent = event.target.value;

        // cross
        var cross = document.createElement('span');
        cross.textContent = 'x';
        cross.classList.add("cross");


        ul.appendChild(li);
        li.append(checkBox, p, cross);
        event.target.value = '';

        // edit p 
        p.addEventListener('dblclick' ,editpara)

        function editpara(eventp) {
            // cross.style.display = 'none';
            // console.log(eventp.target);
            var currentPvalue = eventp.target;
            var inputP = document.createElement('input');
            inputP.classList.add('editinputP')
            inputP.value = currentPvalue.innerText;
            console.log(inputP.value);
            currentPvalue.parentElement.replaceChild(inputP, currentPvalue);
            inputP.addEventListener ('keyup', backToPara);
            function backToPara(e) {
                // console.lo
                if(e.keyCode === 13 && e.target.value != ''){
                    currentPvalue.innerHTML = e.target.value;
                    e.target.parentElement.replaceChild(currentPvalue, inputP);

                }
            }
        }
        
        
        // deletelist
        cross.addEventListener('click',deleteList);
        // doubleclickedit
        p.addEventListener('dblclick', editp);
        // line-through
        checkBox.addEventListener('click', lineThrough);
        // countactive
        var active = document.querySelectorAll('.active');
        active.length += 1;

        // footer
        

    } 
    if (ul.childElementCount != document.querySelectorAll('.completedtask').length) {
        clearall.style.display = 'none';
    }

    //  counter
    activetask = document.querySelectorAll('.activetask').length;
    completedtask = document.querySelectorAll('.completedtask').length;
    
    // footer outer function
    if (ul.childElementCount >= 1) {
        footerDisplay.style.display = 'block';
    }   
    
    // footer inner function
    // itemleft
    itemleft = document.querySelector('.itemleft');
    itemleft.textContent = `${activetask} item left`;

    

}






 // line-through
 function lineThrough(event){
 console.log(event.target);
        if(event.target.checked === false){
            event.target.nextElementSibling.classList.remove('lineThrough');
            event.target.parentElement.classList.add('activetask');
            event.target.parentElement.classList.remove('completedtask');
            activetask += 1;
            completedtask -= 1;
            itemleft.textContent = `${activetask} item left`;


        } else {
        event.target.nextElementSibling.classList.add('lineThrough');
        event.target.parentElement.classList.remove('activetask');
        event.target.parentElement.classList.add('completedtask');
        activetask -= 1;
        completedtask += 1;
        itemleft.textContent = `${activetask} item left`;
        // console.dir(ul.childElementCount);
        // console.dir(document.querySelectorAll('.completedtask'));


        if (ul.childElementCount === document.querySelectorAll('.completedtask').length) {
            clearall.style.display = 'inline-block';
        }
        }



 }

 // doubleclickedit
function editp (eventedit){
    // var pinput = eve

    console.dir(eventedit.target);
}

// deletelist
function deleteList (eventdelete) {
    // console.dir(eventdelete.target.parentElement.firstElementChild.value);

    if(eventdelete.target.parentElement.firstElementChild.checked === false) {
        // console.log(activetask);
        activetask -= 1;
        itemleft.textContent = `${activetask} item left`;

    }
    else if(eventdelete.target.parentElement.firstElementChild.checked=== true) {
        completedtask -= 1;
    }
    eventdelete.target.parentElement.remove();
    if (ul.childElementCount < 1) {
        footerDisplay.style.display = 'none';
    }
   

    // console.dir(eventdelete.target);

}

listInput.addEventListener('keyup', addlist);

// console.dir(ul);




    