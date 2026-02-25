/* 墨文字出現 */
const letters=document.querySelectorAll('.ink-title span');
letters.forEach((el,i)=>{
setTimeout(()=>{el.classList.add('ink-show');},i*200);
});

/* スクロール出現 */
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{threshold:0.2});
cards.forEach(card=>observer.observe(card));

/* クイズデータ */
const kanjiData=[
{k:"統率",y:"とうそつ"},{k:"慎重",y:"しんちょう"},
{k:"対象",y:"たいしょう"},{k:"評価",y:"ひょうか"},
{k:"要約",y:"ようやく"},{k:"構造",y:"こうぞう"},
{k:"論理",y:"ろんり"},{k:"表現",y:"ひょうげん"},
{k:"普遍",y:"ふへん"},{k:"誠実",y:"せいじつ"}
];

let quizList=[],quizIndex=0,correctCount=0,wrongList=[];

const qEl=document.getElementById("quiz-question");
const cEl=document.getElementById("quiz-choices");
const rEl=document.getElementById("quiz-result");
const nBtn=document.getElementById("next-btn");
const retryArea=document.getElementById("retry-area");
const reviewBox=document.getElementById("review-box");

/* 初期化 */
function createQuiz(shuffle){
const base=[...kanjiData];
if(shuffle)base.sort(()=>Math.random()-0.5);
quizList=base.slice(0,5);
quizIndex=0;
correctCount=0;
wrongList=[];
retryArea.style.display="none";
reviewBox.innerHTML="";
showQuiz();
}

function showQuiz(){
cEl.innerHTML="";
rEl.textContent="";
const q=quizList[quizIndex];
qEl.textContent=`第${quizIndex+1}問：「${q.y}」に当てはまる漢字は？`;

const wrongChoices=kanjiData
.filter(item=>item.k!==q.k)
.sort(()=>Math.random()-0.5)
.slice(0,2)
.map(item=>item.k);

const choices=[q.k,...wrongChoices]
.sort(()=>Math.random()-0.5);

choices.forEach(v=>{
const btn=document.createElement("button");
btn.textContent=v;
btn.className="quiz-btn";
btn.onclick=()=>answer(v);
cEl.appendChild(btn);
});
}

function answer(selected){
const buttons=document.querySelectorAll(".quiz-btn");
buttons.forEach(b=>{
b.disabled=true;
if(b.textContent===quizList[quizIndex].k){
b.classList.add("correct");
}else{
b.classList.add("wrong");
}
});

if(selected===quizList[quizIndex].k){
correctCount++;
rEl.textContent="正解";
}else{
wrongList.push(quizList[quizIndex]);
rEl.textContent=`不正解（正解：${quizList[quizIndex].k}）`;
}
}

nBtn.onclick=()=>{
quizIndex++;
if(quizIndex<quizList.length){
showQuiz();
}else{
finishQuiz();
}
};

function finishQuiz(){
qEl.textContent="終了";
cEl.innerHTML="";
rEl.textContent=`${quizList.length}問中 ${correctCount}問正解`;

retryArea.style.display="block";

if(correctCount===quizList.length){
sakuraEffect();
}else if(wrongList.length>0){
reviewBox.innerHTML="復習：<br>"+wrongList.map(w=>`${w.y} → ${w.k}`).join("<br>");
}
}

document.getElementById("retry-same").onclick=()=>createQuiz(false);
document.getElementById("retry-new").onclick=()=>createQuiz(true);

function sakuraEffect(){
const container=document.getElementById("sakura-container");
for(let i=0;i<30;i++){
const petal=document.createElement("div");
petal.className="sakura";
petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=3+Math.random()*3+"s";
container.appendChild(petal);
setTimeout(()=>petal.remove(),6000);
}
}

createQuiz(true);