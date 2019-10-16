
var checkedArray = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked')) : [];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var remove_element = this.parentElement;
    remove_element.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    var value_of_selected_element = ev.target.textContent.replace("\u00D7", "");
    if (ev.target.className !== 'checked') {
      var index_of_element = checkedArray.indexOf(value_of_selected_element);
      checkedArray.splice(index_of_element, 1);
      localStorage.setItem('checked', JSON.stringify(checkedArray));
    } else {
      checkedArray.push(value_of_selected_element);
      localStorage.setItem('checked', JSON.stringify(checkedArray));
    }

  }
}, false);

//Clearing the list
function removeAll() {
  var lst = document.getElementsByTagName("ul");
  lst[0].innerHTML = "";
}
