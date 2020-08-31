window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
