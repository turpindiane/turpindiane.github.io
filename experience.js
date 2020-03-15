/* Credit to W3 Schools */
function toggleExperienceSection(sectionName){
	var x = document.getElementById(sectionName);
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
}