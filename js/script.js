$("#menuButton").click(function(){
  $("#menu").slideToggle('slow');
})





// ***** TAKEN FROM https://www.w3schools.com/howto/howto_css_modals.asp *****// 
// Get the modal
var popup = document.getElementById("myPopup");

// Get the button that opens the modal
var btn = document.getElementById("contactbtn");

// Get the <span> element that closes the modal
var xBtn = document.getElementsByClassName("closeBtn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
xBtn.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
