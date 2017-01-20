(function() {
  var b = document.getElementsByClassName("txtInput")[0];
  document.addEventListener("keypress", function(e) {
    if (e.keyCode == 32) {
      b.value = document.querySelector("[id*=nhwMiddlegwt-uid]").innerHTML + document.querySelector("[id*=nhwMiddleCommagwt-uid]").innerHTML;
    }
  });
})();
