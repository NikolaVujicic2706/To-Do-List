let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
var checkedArray = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const checks = JSON.parse(localStorage.getItem('checked'));
var input = document.getElementById('myInput');
var add_button = document.getElementsByClassName("addBtn");
var inputValue = null;
var myNodelist = document.getElementsByTagName("li");

// add to local storage function
function addToStorage() {
    inputValue = input.value;
    if (inputValue !== '') {
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        input.value = '';
    } else {
        alert("You must write something!");
    }
}

//clear local storage
function clearStorage() {
    localStorage.clear();
    itemsArray = [];
    checkedArray = [];
}

// crate list from local storage
const liMaker = text => {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(text);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (var i = 0; i < close.length; ++i) {
        (function (index) {
            close[i].onclick = function () {
                var remove_element = this.parentElement;
                remove_element.style.display = "none";
                var element = remove_element.textContent.replace("\u00D7", "");
                var index_of_element = itemsArray.indexOf(element);
                itemsArray.splice(index_of_element, 1);
                localStorage.setItem('items', JSON.stringify(itemsArray));

            }
        })(i);
    }

}

//iterate through local storage(items) and make list
data.forEach(item => {
    liMaker(item);
});

//iterate through local storage (checks) and make list
if (checks != null) {
    checks.forEach(item => {
        for (let i = 0; i < myNodelist.length; i++) {
            if (myNodelist[i].textContent.replace("\u00D7", "") === item) {
                myNodelist[i].className = 'checked';
            }
        }
    });
}