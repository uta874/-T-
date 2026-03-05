/* 墨タイトル */

document.querySelectorAll('.ink-title span')
.forEach((el,i)=>{
setTimeout(()=>el.classList.add('ink-show'),i*200)
})

/* スクロール */

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("active")
}
})
},{threshold:0.2})

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el))

/* 和暦 */

const wareki=document.getElementById("wareki")
const wafuu=document.getElementById("wafuu")
const descriptionBox=document.getElementById("month-description")

const formatter=new Intl.DateTimeFormat(
"ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"}
)

const wafuuData=[
{name:"睦月",desc:"正月に人々が集まり、仲睦まじく過ごすことから名付けられたとされます。"},
{name:"如月",desc:"寒さのため衣を重ねて着る『衣更着（きさらぎ）』が由来とされます。"},
{name:"弥生",desc:"草木がいよいよ生い茂る月という意味があります。"},
{name:"卯月",desc:"卯の花が咲く季節に由来するとされます。"},
{name:"皐月",desc:"田植えを始める月であることから名付けられたという説があります。"},
{name:"水無月",desc:"『無』は助詞の『の』で、水の月という意味です。"},
{name:"文月",desc:"稲穂が実る月、または書物を開く月という説があります。"},
{name:"葉月",desc:"木々の葉が落ち始める季節に由来します。"},
{name:"長月",desc:"夜が長くなる『夜長月』が語源とされます。"},
{name:"神無月",desc:"神々が出雲に集まるため、他の地域では神がいなくなるという説があります。"},
{name:"霜月",desc:"霜が降り始める季節であることに由来します。"},
{name:"師走",desc:"僧（師）も走り回るほど忙しい月という説があります。"}
]

const today=new Date()
const m=today.getMonth()

wareki.textContent=formatter.format(today)
wafuu.textContent=`（${wafuuData[m].name}）`
descriptionBox.textContent=
`${wafuuData[m].name}：${wafuuData[m].desc}`

/* クイズ */

const QUIZ_COUNT=10

const kanjiData=[
{k:"統率",y:"とうそつ"},
{k:"慎重",y:"しんちょう"},
{k:"対象",y:"たいしょう"},
{k:"評価",y:"ひょうか"},
{k:"要約",y:"ようやく"},
{k:"構造",y:"こうぞう"},
{k:"論理",y:"ろんり"},
{k:"表現",y:"ひょうげん"},
{k:"普遍",y:"ふへん"},
{k:"誠実",y:"せいじつ"},
{k:"連続",y:"れんぞく"},
{k:"主張",y:"しゅちょう"}
]

let quizList=[]
let quizIndex=0
let score=0
let combo=0
let wrongList=[]
let timer=10
let interval

function initQuiz(){

quizList=[...kanjiData]
.sort(()=>Math.random()-0.5)
.slice(0,QUIZ_COUNT)

quizIndex=0
score=0
combo=0
wrongList=[]

showQuiz()

}

function showQuiz(){

clearInterval(interval)

const q=quizList[quizIndex]

document.getElementById("quiz-question").textContent=
`第${quizIndex+1}問：「${q.y}」の漢字は？`

const wrong=kanjiData
.filter(x=>x.k!==q.k)
.sort(()=>Math.random()-0.5)
.slice(0,2)

const choices=[q,...wrong].sort(()=>Math.random()-0.5)

const box=document.getElementById("quiz-choices")

box.innerHTML=""

choices.forEach(v=>{

const btn=document.createElement("button")

btn.textContent=v.k

btn.className="quiz-btn"

btn.onclick=()=>answer(v.k)

box.appendChild(btn)

})

startTimer()

}

function startTimer(){

timer=10

document.getElementById("timer").textContent="残り"+timer+"秒"

interval=setInterval(()=>{

timer--

document.getElementById("timer").textContent="残り"+timer+"秒"

if(timer<=0){

clearInterval(interval)

answer(null)

}

},1000)

}

function answer(selected){

clearInterval(interval)

const correct=quizList[quizIndex].k

document.querySelectorAll(".quiz-btn").forEach(b=>{

b.disabled=true

if(b.textContent===correct)b.classList.add("correct")
else b.classList.add("wrong")

})

if(selected===correct){

score+=10+combo*5
combo++

}else{

combo=0
wrongList.push(quizList[quizIndex])

}

document.getElementById("score-board").textContent=
"Score:"+score+" Combo:"+combo

}

function finish(){

document.getElementById("quiz-question").textContent="終了"
document.getElementById("quiz-choices").innerHTML=""
document.getElementById("timer").textContent=""

const best=localStorage.getItem("bestScore")||0

if(score>best){

localStorage.setItem("bestScore",score)

}

document.getElementById("score-board").textContent=
"最終Score:"+score+" / Best:"+localStorage.getItem("bestScore")

if(wrongList.length>0){

document.getElementById("review-box").innerHTML=
"復習：<br>"+wrongList.map(w=>w.y+"→"+w.k).join("<br>")

}else{

document.getElementById("review-box").textContent=
"全問正解！素晴らしい！"

}

}

document.getElementById("next-btn").onclick=()=>{

quizIndex++

if(quizIndex<quizList.length){

showQuiz()

}else{

finish()

}

}

document.getElementById("retry-same").onclick=initQuiz
document.getElementById("retry-new").onclick=initQuiz

initQuiz()
