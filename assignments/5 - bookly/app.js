var addBook = document.querySelector('#add-book');
var ul = document.querySelector('ul');
var hide = document.querySelector("#hide");
var bookSearch = document.querySelector('#search-books')


var bookState = JSON.parse(localStorage.getItem('localStoragestate')) || [];
checkAfterRefresh(bookState);
view(bookState);

// all event listner
ul.addEventListener('click', deleteBook);
addBook.addEventListener('click', addToState);
bookSearch.addEventListener('keyup', bookSearchFun);



function bookSearchFun (event) {
    var searchedState = bookState.filter(v => (v.name).toLowerCase().includes((event.target.value).trim().toLowerCase()) == true);
    // bookState.filter(v => console.log(v.name.includes(event.target.value)));
    
    // console.log(searchedState);
    view(searchedState);
}
// add to state and localstorage
function addToState (event){ 
    // console.dir(event.target);
    if (event.target.tagName == 'BUTTON') {
        // console.dir(event)
            // console.log(event.keyCode);
            var obj = {};
            obj.name = event.target.previousElementSibling.value;
            obj.id = Date.now();
            obj.view = true;
            bookState.push(obj);
            // console.log(event.target);
            localStorage.setItem('localStoragestate', JSON.stringify(bookState));
            view(bookState);
            // console.log(state);
        
    }
    else if(event.target.type == 'checkbox' || event.target.tagName == "LABEL") {
        if (event.target.checked == true) {
            bookState.forEach (v => v.view = false);
            localStorage.clear();
            localStorage.setItem('localStoragestate', JSON.stringify(bookState));
            view(bookState);
        } else  if (event.target.checked == false) {
            bookState.forEach (v => v.view = true);
            localStorage.clear();
            localStorage.setItem('localStoragestate', JSON.stringify(bookState));
            view(bookState);
        }
    }
    // console.log(state)
}



// view li
function view (bookState) {
    console.log('p')
    ul.innerHTML = '';
    bookState.forEach(v => {
        if(v.view == true) {
            var li = document.createElement('li');
            li.textContent = v.name;
            li.dataset.id = v.id;

            // var p =document.createElement('p');
            // p.textContent = v.name;
            
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add("delete");

            li.append(deleteButton);
            ul.appendChild(li); 
        } 
    });
}


// delete from booklist
function deleteBook (event) {
    if(event.target.tagName == 'BUTTON'){

       bookState = bookState.filter(v => v.id != event.target.parentElement.dataset.id)
       localStorage.clear();
       localStorage.setItem('localStoragestate', JSON.stringify(bookState));
       view(bookState);
       
    }
}
// console.log(bookState);

function checkAfterRefresh (bookState) {
    if((bookState.filter(v => v.view == false).length > 0)) {
        hide.checked = true;
    }
}

