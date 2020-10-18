function hoverOver() {
  document.getElementById("column-title-2").style.color = "red";
}

function hoverAway() {
  document.getElementById("column-title-2").style.color = "blue";
}

function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}