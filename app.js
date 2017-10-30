function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  document.getElementById("StartupMessage").style.display = "none";
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openPackages(evt) {
  document.getElementById("StartupMessage").style.display = "none";
  
