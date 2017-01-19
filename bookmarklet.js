javascript:
(function() {
  function oldA() {
    return document.getElementById("nhwMiddlegwt-uid-8") || document.getElementById("nhwMiddlegwt-uid-16");
  };
  wordNumber = 0;

  function a() {
    wordNumber++;
    return answerArr[wordNumber];
  }

  firstWord = "";
  for (i = 0; i < 99; i++) {
    firstWord = document.getElementById("nhwMiddlegwt-uid-" + i);
    if (firstWord != "") {
      break;
    }
  }

  answer = "";
  for (i = 0; i < 99; i++) {
    answer = document.getElementById("nhwRightgwt-uid-" + i);
    if (answer != "") {
      break;
    }
  }
  answer = firstWord.innerHTML + answer.innerHTML;
  answerArr = answer.split(" ");

  var b = document.getElementsByClassName("txtInput")[0];
  document.addEventListener("keypress", function(e) {
    if (e.keyCode == 32) {
      b.value = a().innerHTML;
    }
  });
})();
