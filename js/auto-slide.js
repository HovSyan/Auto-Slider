var index = 0;

start();

function start() {
  var dots = document.getElementsByClassName("dot");
  var i;

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  dots[index].className = "dot active-dot";
  dots[index].click();

  if(index == dots.length - 1) {
    index = 0;
  }
  else {
    index++;
  }
}

setInterval(start, 4000);

function currentDotIndex(n) {
  index = n - 1;
}