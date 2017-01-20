# TypeRacer Hack
Use this code when playing [TypeRacer](http://play.typeracer.com/).

##Bookmarklet
Save this as a bookmarklet and click it when the match starts. Then, press the spacebar to autofill each word.<br/>
```javascript:(function(){var b=document.getElementsByClassName("txtInput")[0];document.addEventListener("keypress",function(e){if(e.keyCode==32){b.value=document.querySelector("[id*=nhwMiddlegwt-uid]").innerHTML+document.querySelector("[id*=nhwMiddleCommagwt-uid]").innerHTML;}});})();```

This code is based off of [ScratchMan544](https://github.com/ScratchMan544/typeracer-hack)
