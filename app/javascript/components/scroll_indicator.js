window.onscroll = function() {scrollDepthIndicator()};

function scrollDepthIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}

export { scrollDepthIndicator };