// Feross Aboukhadijeh - Apr 12 2010
// 
// Script I hacked together to cheat on TypeRacer.com. You use it by waiting for the typing game
// to start. Once it starts, open up Firebug, paste in this code, and run it. Now, just press
// space to auto-type each word. I made the user push space, as opposed to advancing the words 
// automatically because I believe the site looks for a keypress event before evaluating the contents
// of the input box. I could not figure out how to fake a user keypress event. Perhaps this is
// disallowed for browser security reasons?
//
// Next todo: Site detects the unbelievable WPM and asks you to do a captcha test.

wordNumber = 0;
function PrintNextWord() {
    word = answerArr[wordNumber];
    inputs[0].value = word + " ";
    wordNumber++;
}

// setup - run once

document.onkeypress = PrintNextWord;

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

answer = firstWord.innerHTML + answer.innerHTML;
// alert(answer);
answerArr = answer.split(" ");

inputs = document.getElementsByTagName("input");

PrintNextWord();
