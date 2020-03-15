function scrollExperience() {
  var languages = document.getElementById("languagesSection");
  var frameworksAndServers = document.getElementById("frameworksSection");
  var education = document.getElementById("educationSection");

  if(frameworksAndServers.style.display === "block"){
  	navigateToEducation();
  }
  else if(education.style.display === "block"){
  	navigateToLanguages();
  }
  else{
  	navigateToFrameworks();
  }
}

function scrollExperienceBackwards() {
  var languages = document.getElementById("languagesSection");
  var frameworksAndServers = document.getElementById("frameworksSection");
  var education = document.getElementById("educationSection");

  if(frameworksAndServers.style.display === "block"){
  	navigateToLanguages();
  }
  else if(education.style.display === "block"){
  	navigateToFrameworks();
  }
  else{
  	navigateToEducation();
  }
}


function navigateToLanguages(){
  var languages = document.getElementById("languagesSection");
  var frameworksAndServers = document.getElementById("frameworksSection");
  var education = document.getElementById("educationSection");

  var circle1 = document.getElementById("circleOne");
  var circle2 = document.getElementById("circleTwo");
  var circle3 = document.getElementById("circleThree");

  circle1.innerHTML = '<a href="javascript:void(0);"><img src="icons/selected.png" class="navigationCircle" onclick="navigateToLanguages()"/></a>';
  circle2.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToFrameworks()"/></a>';
  circle3.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToEducation()"/></a>';

  languages.style.display = "block";
  frameworksAndServers.style.display = "none";
  education.style.display = "none";
}

function navigateToFrameworks(){
  var languages = document.getElementById("languagesSection");
  var frameworksAndServers = document.getElementById("frameworksSection");
  var education = document.getElementById("educationSection");

  var circle1 = document.getElementById("circleOne");
  var circle2 = document.getElementById("circleTwo");
  var circle3 = document.getElementById("circleThree");

  circle1.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToLanguages()"/></a>';
  circle2.innerHTML = '<a href="javascript:void(0);"><img src="icons/selected.png" class="navigationCircle" onclick="navigateToFrameworks()"/></a>';
  circle3.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToEducation()"/></a>';


  languages.style.display = "none";
  frameworksAndServers.style.display = "block";
  education.style.display = "none";
}

function navigateToEducation(){
  var languages = document.getElementById("languagesSection");
  var frameworksAndServers = document.getElementById("frameworksSection");
  var education = document.getElementById("educationSection");

  var circle1 = document.getElementById("circleOne");
  var circle2 = document.getElementById("circleTwo");
  var circle3 = document.getElementById("circleThree");

  circle1.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToLanguages()"/></a>';
  circle2.innerHTML = '<a href="javascript:void(0);"><img src="icons/circle.png" class="navigationCircle" onclick="navigateToFrameworks()"/></a>';
  circle3.innerHTML = '<a href="javascript:void(0);"><img src="icons/selected.png" class="navigationCircle" onclick="navigateToEducation()"/></a>';


  languages.style.display = "none";
  frameworksAndServers.style.display = "none";
  education.style.display = "block";
}