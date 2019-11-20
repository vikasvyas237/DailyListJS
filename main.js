// Javascript Document

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");

  //Here \u00D7 is the unicode charecter for multiplication sign can be used for delete (cross) icon
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// This section is for the close button and if we click it then one item will be deleted fro the list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//This section will add the checked item in the list when it is clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//This section will add the task to the list by clicking the add button
  function newElement() {
  //This will creat a new element in the list
  var li = document.createElement("li");

  //THis will take the value of the input that we will enter
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  //This condition will display the popup message if we add without wrting anything in the box and hit the add button
  if (inputValue === '') {
    alert("No task is added is to the list");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = " ";

  var span = document.createElement("SPAN");

  //Here \u00D7 is the unicode charecter for multiplication sign can be used for delete (cross) icon
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
