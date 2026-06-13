let index = 0;


let words = [

{
word:"Đàn ông",

jp:"男性",
kana:"だんせい",
meaning:"Nam tính",

en:"Man",
ipa:"/mæn/",

cn:"男性",
pin:"nánxìng",


exJP:"男性は会社で働いています。",
exEN:"The man works at a company.",
exCN:"那个男人在公司工作。",
exVN:"Người đàn ông đang làm việc ở công ty."

}

];



function show(){


let w=words[index];


document.getElementById("word").innerHTML=w.word;


document.getElementById("jp").innerHTML=w.jp;

document.getElementById("kana").innerHTML=w.kana;

document.getElementById("meaning").innerHTML=w.meaning;


document.getElementById("en").innerHTML=w.en;

document.getElementById("ipa").innerHTML=w.ipa;


document.getElementById("cn").innerHTML=w.cn;

document.getElementById("pin").innerHTML=w.pin;


document.getElementById("exJP").innerHTML=w.exJP;

document.getElementById("exEN").innerHTML=w.exEN;

document.getElementById("exCN").innerHTML=w.exCN;

document.getElementById("exVN").innerHTML=w.exVN;



}



function next(){

index++;

if(index>=words.length)
index=0;

show();

}



function back(){

index--;

if(index<0)
index=words.length-1;

show();

}



function voice(text,lang){

let u=new SpeechSynthesisUtterance(text);

u.lang=lang;

u.rate=0.8;

speechSynthesis.speak(u);

}



function speakWord(){

voice(words[index].word,"ja-JP");

}


function speakJP(){

voice(words[index].jp,"ja-JP");

}


function speakEN(){

voice(words[index].en,"en-US");

}


function speakCN(){

voice(words[index].cn,"zh-CN");

}



function speakExJP(){

voice(words[index].exJP,"ja-JP");

}



function speakExEN(){

voice(words[index].exEN,"en-US");

}



function speakExCN(){

voice(words[index].exCN,"zh-CN");

}



function speakVN(){

voice(words[index].exVN,"vi-VN");

}