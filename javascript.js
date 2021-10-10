// toggles nav items when toggler is clicked
document.getElementById("toggler").addEventListener("click", ExpandNav);
function ExpandNav() {
   var x = document.getElementById("nav-links").style.display;
   if (x == "inline-flex") {
      document.getElementById("nav-links").classList.remove("show-nav");
      document.getElementById("nav-links").setAttribute("data-expanded", "false");
      document.getElementById("nav-links").classList.add("hide-nav");
      setTimeout(function() {
         document.getElementById("nav-links").style.display = "none";
      },500);
   }
   else {
      document.getElementById("nav-links").classList.remove("hide-nav");
      document.getElementById("nav-links").style.display = "inline-flex";
      document.getElementById("nav-links").setAttribute("data-expanded", "true");
      document.getElementById("nav-links").classList.add("show-nav");
   }
}

// toggles nav items when screens is resized
window.addEventListener('resize', ShowNav);
function ShowNav() {
   var width = parseInt(getComputedStyle(document.getElementById("nav")).width);
   if (getComputedStyle(document.getElementById("toggler")).display == "none") {
      document.getElementById("nav-links").style.display = "inline-flex";
      document.getElementById("nav-links").setAttribute("data-expanded", "false");
   }
   else if(width < 769 && document.getElementById("nav-links").getAttribute("data-expanded") == "false") {
      document.getElementById("nav-links").style.display = "none";
   }
}

//hides navigation when clicked on body if it is expanded in moblie view
document.getElementsByTagName("body")[0].addEventListener("click", HideNav);
function HideNav(k) {
   var classN = k.target.className;
   var idN = k.target.id;
   var navDisplay = document.getElementById("nav-links").style.display;
   var width = parseInt(getComputedStyle(document.getElementById("nav")).width);
   if (classN != "nav-item" && classN != "fas fa-bars" && classN != "navbar-toggle-icon" &&
         	         idN != "nav-links" && idN != "toggler" && navDisplay == "inline-flex" && width < 769) {
      document.getElementById("nav-links").classList.remove("show-nav");
      document.getElementById("nav-links").classList.add("hide-nav");
      document.getElementById("nav-links").setAttribute("data-expanded", "false");
      setTimeout(function() {
         document.getElementById("nav-links").style.display = "none";
      }, 500);
   }
}
