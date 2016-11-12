// ==UserScript==
// @name         9Gag AutoTag
// @namespace    http://tampermonkey.net/
// @author       Haxxorsid(@haxxorsid)

// @grant        none
// @include      http://9gag.com/gag/*
// ==/UserScript==
var list1 = ["@1haxxorsid01 @1haxxorsid02 @1haxxorsid03","@1haxxorsid04 @1haxxorsid05 @1haxxorsid06","@1haxxorsid07 @1haxxorsid08 @1haxxorsid09",
                 "@1haxxorsid10 @1haxxorsid11 @1haxxorsid12","@1haxxorsid13 @1haxxorsid14 @1haxxorsid15"];

var list2 = ["@2haxxorsid01 @2haxxorsid02 @2haxxorsid03","@2haxxorsid04 @2haxxorsid05 @2haxxorsid06","@2haxxorsid07 @2haxxorsid08 @2haxxorsid09"]; 


var list3 = ["@3haxxorsid01 @3haxxorsid02 @3haxxorsid03","@3haxxorsid04 @3haxxorsid05 @3haxxorsid06"]; 


var list4 = ["@4haxxorsid01 @4haxxorsid02 @4haxxorsid03","@4haxxorsid04 @4haxxorsid05 @4haxxorsid06","@4haxxorsid07 @4haxxorsid08 @4haxxorsid09",
                 "@4haxxorsid10 @4haxxorsid11 @4haxxorsid12"];
var i = 1;

window.onkeydown = function(keyPressed){
   
  if(keyPressed.keyCode == 113){ 
    document.getElementsByClassName("post-text-area")[0].value = "Tag 1" + "/" + list1.length + "\n"+ list1[0];
    document.getElementsByClassName("cmnt-btn")[0].click();
    
   if(list1.length>1){
var repeat1 = setInterval(function start(){
if(i == list1.length-1){
    clearInterval(repeat1);
}
document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[1].value = "Tag " + (i+1) + "/" + list1.length + "\n" + list1[i];
document.getElementsByClassName("cmnt-btn")[1].click(); 
i++;
  },2000);i=1;}}
    
    else if(keyPressed.keyCode == 115){
        document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value = "Tag 1" + "/" + list2.length + "\n"+ list2[0];
document.getElementsByClassName("cmnt-btn")[0].click();
    
    if(list2.length>1){
var repeat2 = setInterval(function start(){
if(i == list2.length -1){
    clearInterval(repeat2); 
}
document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value = "Tag " + (i+1) + "/" + list2.length + "\n" + list2[i];
document.getElementsByClassName("cmnt-btn")[0].click(); 
i++;
  },2000);i=1;}}
     else if(keyPressed.keyCode == 119){
        document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value = "Tag 1" + "/" + list3.length + "\n"+ list3[0];
document.getElementsByClassName("cmnt-btn")[0].click();
    
    if(list3.length>1){
var repeat3 = setInterval(function start(){
if(i == list3.length -1){
    clearInterval(repeat3); 
}
document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value ="Tag " + (i+1) + "/" + list3.length + "\n" +  list3[i];
document.getElementsByClassName("cmnt-btn")[0].click(); 
i++;
  },2000);i=1;}}
     else if(keyPressed.keyCode == 120){
        document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value = "Tag 1" + "/" + list4.length + "\n"+ list4[0];
document.getElementsByClassName("cmnt-btn")[0].click();
    
    if(list4.length>1){
var repeat4 = setInterval(function start(){
if(i == list4.length -1){
    clearInterval(repeat4); 
}
document.getElementsByClassName("reply")[0].click();
document.getElementsByClassName("post-text-area")[0].value = "Tag " + (i+1) + "/" + list4.length + "\n" + list4[i];
document.getElementsByClassName("cmnt-btn")[0].click(); 
i++;
  },2000);i=1;}}
    };