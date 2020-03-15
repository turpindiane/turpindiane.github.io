/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/* Credit to W3 Schools */
function toggleMenu() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}