$("#menuButton").click(function(){
  $("#menu").slideToggle('slow');
})


let btn = document.getElementById("contactBtn");

let xBtn = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
  popup.style.display = "block";
}

xBtn.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
