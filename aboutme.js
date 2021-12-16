
var model = document.getElementById("myModel");
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  model.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  model.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == model) {
    model.style.display = "none";
  }
}