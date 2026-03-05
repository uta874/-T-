/* 墨タイトル */

document.querySelectorAll(".ink-title span")
.forEach((el,i)=>{

setTimeout(()=>{

el.classList.add("ink-show")

},i*150)

})

/* 和暦 */

const wareki=document.getElementById("wareki")
const wafuu=document.getElementById("wafuu")

if(wareki){

const formatter=new Intl.DateTimeFormat("ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"})

wareki.textContent=formatter.format(new Date())

}

/* クイズ */

const quizData=[

{k:"統率",y:"とうそつ"},
{k:"慎重",y:"しんちょう"},
{k:"対象",y:"たいしょう"},
{k:"評価",y:"ひょうか"},
{k:"要約",y:"ようやく"},
{k:"構造",y:"こうぞう"},
{k:"論理",y:"ろんり"},
{k:"表現",y:"ひょうげん"},
{k:"普遍",y:"ふへん"},
{k:"誠実",y:"せいじつ"}

]

let index=0
let score=0

const qEl=document.getElementById("quiz-question")
const cEl=document.getElementById("quiz-choices")
const nextBtn=document.getElementById("next-btn")

function showQuiz(){

if(!qEl)return

const q=quizData[index]

qEl.textContent=`第${index+1}問：「${q.y}」の漢字は？`

cEl.innerHTML=""

const choices=[q,...quizData.sort(()=>Math.random()-.5).slice(0,2)]

choices.sort(()=>Math.random()-.5)

choices.forEach(v=>{

const btn=document.createElement("button")

btn.textContent=v.k

btn.className="quiz-btn"

btn.onclick=()=>answer(v.k)

cEl.appendChild(btn)

})

}

function answer(a){

const correct=quizData[index].k

if(a===correct){

score+=10

}

}

if(nextBtn){

nextBtn.onclick=()=>{

index++

if(index<quizData.length){

showQuiz()

}else{

qEl.textContent="終了"

cEl.innerHTML=""

}

}

}

showQuiz()