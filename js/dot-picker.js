function dot(n) {
  var i;
  var element = document.getElementById("slider-image-index");
  var dots = document.getElementsByClassName('dot');

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  element.className = "active-slide-" + n;
  dots[n - 1].className = "dot active-dot";
}