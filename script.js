function ToggleMenu() {
    var x = document.getElementById("social__media");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }