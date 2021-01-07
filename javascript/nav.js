

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation-wrapper").style.height = "5vh";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navigation-wrapper").style.height = "7vh";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}