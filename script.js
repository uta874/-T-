/* 和暦 */
const formatter = new Intl.DateTimeFormat(
"ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"}
);

document.getElementById("wareki").textContent =
formatter.format(new Date());

/* 今日の一問 */
const dailyQ = [
["徒然草の作者は？","吉田兼好"],
["枕草子の作者は？","清少納言"],
["俳句の音数は？","5-7-5"],
["奥の細道の作者は？","松尾芭蕉"]
];

let dq = dailyQ[Math.floor(Math.random()*dailyQ.length)];
document.getElementById("dailyQuestion").innerHTML =
dq[0] + "<br>答え：" + dq[1];

/* 名言 */
const quotes = [
"人間失格 — 太宰治",
"こころ — 夏目漱石",
"羅生門 — 芥川龍之介",
"山月記 — 中島敦"
];

document.getElementById("quoteBox").innerHTML =
quotes[Math.floor(Math.random()*quotes.length)];

/* 漢字クイズ */
const kanji = [
["とうそつ","統率"],
["しんちょう","慎重"],
["たいしょう","対象"]
];

let k = 0;

function showKanji(){
document.getElementById("kanjiQuestion").innerHTML =
"「"+kanji[k][0]+"」の漢字は？";

let choices = [kanji[k][1]];
while(choices.length<3){
let r = kanji[Math.floor(Math.random()*kanji.length)][1];
if(!choices.includes(r)) choices.push(r);
}
choices.sort(()=>Math.random()-0.5);

let html="";
choices.forEach(c=>{
html += `<div class="choice" onclick="checkKanji('${c}')">${c}</div>`;
});
document.getElementById("kanjiChoices").innerHTML = html;
}

function checkKanji(c){
if(c===kanji[k][1]){
document.getElementById("kanjiResult").innerHTML="⭕ 正解";
}else{
document.getElementById("kanjiResult").innerHTML="❌ 正解は "+kanji[k][1];
}
}

function nextKanji(){
k++;
if(k>=kanji.length) k=0;
showKanji();
}
showKanji();

/* スクロール表示 */
const fade = document.querySelectorAll(".fade");
window.addEventListener("scroll", ()=>{
fade.forEach(el=>{
let rect = el.getBoundingClientRect().top;
if(rect < window.innerHeight-100){
el.style.opacity=1;
el.style.transform="translateY(0)";
}
});
});