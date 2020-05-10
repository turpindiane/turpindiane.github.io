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

/* Calculate age based on date */
function renderPage(){
	var birthdate = new Date('May 15, 1996 00:00:00');
	var currentDate = new Date();

	var age = currentDate.getFullYear() - birthdate.getFullYear() - 1;
	if(birthdate.getMonth() < currentDate.getMonth()) {
		age = age + 1;
	}
	if(birthdate.getMonth() == currentDate.getMonth()){
		if(birthdate.getDate() <= currentDate.getDate()){
			age = age + 1;
		}
	}

	document.getElementById("index.age").innerHTML = age;
}
