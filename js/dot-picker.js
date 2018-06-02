function dot(n) {
  var i;

  var dots = document.getElementsByClassName('dot');

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  dots[n - 1].className = "dot active-dot";
}