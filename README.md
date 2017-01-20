# TypeRacer Hack
Use this code when playing [TypeRacer](http://play.typeracer.com/).

##Fastest code
Use this bookmarklet and click it when the match starts:<br/>
```javascript:(function(){function a(){return document.querySelector("[id*=nhwMiddlegwt-uid]");};var b=document.getElementsByClassName("txtInput")[0];document.addEventListener("keypress",function(e){if(e.keyCode == 32){b.value=a().innerHTML;}});})();```

##Code with commas
Use this bookmarklet and click it when the match starts:<br/>
```javascript:(function(){function a(){return document.getElementById("nhwMiddlegwt-uid-8")||document.getElementById("nhwMiddlegwt-uid-16");};var b=document.getElementsByClassName("txtInput")[0];document.addEventListener("keypress",function(e){if(e.keyCode == 32){b.value=a().innerHTML;}});})();```

This code is based off of [ScratchMan544](https://github.com/ScratchMan544/typeracer-hack)
