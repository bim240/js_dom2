var inputdata = document.querySelector('input');
var ul = document.querySelector('ul');
var state = [];
var itemleft = document.querySelector('.itemleft');
var all = document.querySelector('.all');
var active = document.querySelector('.active');
var complete = document.querySelector('.complete');
var display = document.querySelector('.display');
var clearall = document.querySelector('.clearall');




// var liid = -1;
// console.dir(inputdata);


// all function calll 
inputdata.addEventListener('keyup', addInputData);



// save list data to state
function addInputData (event) {
    // console.log(inputdata);
    if (event.keyCode == 13 && event.target.value != ''){
        var obj = {};
        obj.name = event.target.value;
        obj.finished = false;
        obj.liid = Date.now();
        state.push(obj);
        console.log(state);
        event.target.value = '';
        view(state);
    }
}

// display list on screen
function view(state) {
    ul.innerHTML = '';
    state.map((value) => {
        // console.log(value);
    var li = document.createElement('li');
    li.className='flex';
    li.setAttribute('data-id',value.liid);
    // console.log(li);

    // checkbox
    var checkBox = document.createElement('input');
    checkBox.classList.add('checkbox');
    checkBox.type = 'checkbox';

    // para
    var p = document.createElement('p');
    p.classList.add('para');
    p.textContent = value.name;

    // cross
    var cross = document.createElement('span');
    cross.textContent = 'x';
    cross.classList.add("cross");


    ul.appendChild(li);
    li.append(checkBox, p, cross);
    itemleft.innerHTML = `${(state.filter(v => v.finished != true)).length} item left`;
    display.style.display = "block";
    clearall.style.display = "none";

    }
    )
}

// all the event listner on ul
ul.addEventListener('click',allEventOnUl);
ul.addEventListener('dblclick', editPara);

function allEventOnUl (event) {
    // console.dir(event.target);
    // cross on click event
    if(event.target.tagName == 'SPAN') {
        var removeid = event.target.parentElement.dataset.id;
        state = state.filter(value => value.liid != removeid);
        view(state);
        itemleft.innerHTML = `${(state.filter(v => v.finished != true)).length} item left`;
        if (state.length < 1){
            display.style.display = "none";
        }
    }


    // checkbox  on click event
    else if (event.target.tagName == 'INPUT') {
        if(event.target.checked === false){

            event.target.nextElementSibling.classList.remove('lineThrough');
            var finishedTask = event.target.parentElement.dataset.id;
            state = state.filter(v1 => {
                // console.log(v1);
                if (v1.liid == finishedTask ){
                    // console.log(v.finished)
                    v1.finished = false;
                    // console.log(state);
                }
                return state;
            }); 
            itemleft.innerHTML = `${(state.filter(v => v.finished != true)).length} item left`;

        } else {
            event.target.nextElementSibling.classList.add('lineThrough');
            var finishedTask = event.target.parentElement.dataset.id;
            // console.log(finishedTask);
         state = state.filter(v => {
            if (v.liid == finishedTask) {
                // console.log(v);
                v.finished = true;
                // console.log(state);
            }
            return state;
            });
            itemleft.innerHTML = `${(state.filter(v => v.finished != true)).length} item left`;
            if ((state.filter(v=> v.finished !=true).length == 0)) {
                clearall.style.display = "block";
            }

            // if (ul.childElementCount === document.querySelectorAll('.completedtask').length) {
            //     clearall.style.display = 'inline-block';
            // }
        }
        // console.log(state1);

    }

   
}
// edit para 
function editPara (eventp) {
     
     if ( eventp.target.tagName = 'p'){
        // cross.style.display = 'none';
        var currentPvalue = eventp.target;
        var inputP = document.createElement('input');
        inputP.classList.add('editinputP');
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
        // cross.style.display = 'inline-block';


    }
}



// footer function

itemleft.innerHTML = `${(state.filter(v => v.finished != true)).length} item left`;


all.addEventListener('click', allList);
function allList(event) {
    // console.log(state);
    view(state);
}


        //active
active.addEventListener('click', activeList);
function activeList(event) {
    // console.log(state)
    var stateactive = state.filter(v => v.finished!= true);
    view(stateactive);
} 
        // completed
complete.addEventListener('click', completeList);
function completeList(event) {
    // console.log(state)
    var statecomplete = state.filter(v => v.finished == true);
    view(statecomplete);
}
clearall.addEventListener('click', clearalllist);
function clearalllist () {
    state = [];
    view(state);
    display.style.display = 'none';
}




































