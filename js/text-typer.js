//============The official file=============
//Typing Text (DHTML) v1 (Sunday, April 15th, 2001)
//Programmed by: Haitham M. Al-Beik
//Email: albeik26@hotmail.com
//Visit http://javascriptkit.com for this script


var newsText = new Array();
newsText[0] = "LOADING..."
newsText[1] = "<!-- CODING -->";
newsText[2] = "//PROGRAMMING";
newsText[3] = "/*DEVELOPING*/";
newsText[4] = "--SCRIPTING";
newsText[5] = "#DESIGNING";


var ttloop = 1;    // Repeat forever? (1 = True; 0 = False)
var tspeed = 50;   // Typing speed in milliseconds (larger number = slower)
var tdelay = 5000; // Time delay between newsTexts in milliseconds

// ------------- NO EDITING AFTER THIS LINE ------------- \\
var dwAText, cnews=0, eline=0, cchar=0, mxText;

function doNews() {
  mxText = newsText.length - 1;
  dwAText = newsText[cnews];
  setTimeout("addChar()",1000)
}
function addNews() {
  cnews += 1;
  if (cnews <= mxText) {
    dwAText = newsText[cnews];
    if (dwAText.length != 0) {
      document.news.news2.value = "";
      eline = 0;
      setTimeout("addChar()",tspeed)
    }
  }
}
function addChar() {
  if (eline!=1) {
    if (cchar != dwAText.length) {
      nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
      document.news.news2.value = nmttxt;
      cchar += 1;
      if (cchar != dwAText.length) document.news.news2.value += "_";
    } else {
      cchar = 0;
      eline = 1;
    }
    if (mxText==cnews && eline!=0 && ttloop!=0) {
      cnews = 0; setTimeout("addNews()",tdelay);
    } else setTimeout("addChar()",tspeed);
  } else {
    setTimeout("addNews()",tdelay)
  }
}
