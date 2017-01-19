javascript:
(function(){
    function oldA(){
        return document.getElementById("nhwMiddlegwt-uid-8")||document.getElementById("nhwMiddlegwt-uid-16");
    };
    function a() {
    return answerArr[wordNumber];
    wordNumber++;
}

firstWord = null;
for (i=0; i<99; ++i) {
    firstWord = document.getElementById("nhwMiddlegwt-uid-" + i);
    if (firstWord != null) {
        break;
    }
}

answer = null;
for (i=0; i<99; ++i) {
    answer = document.getElementById("nhwRightgwt-uid-" + i);
    if (answer != null) {
        break;
    }
}

    var b=document.getElementsByClassName("txtInput")[0];
    document.addEventListener("keypress",function(e){
        if(e.keyCode == 32){
            b.value=a().innerHTML;
        }
    });
})();
