/* 墨タイトル */

document.querySelectorAll('.ink-title span')
.forEach((el,i)=>{
setTimeout(()=>el.classList.add('ink-show'),i*200)
})

/* 式神生成 */

const shikigamiLayer=document.querySelector(".shikigami-layer")

for(let i=0;i<10;i++){

const s=document.createElement("div")
s.className="shikigami"
s.innerText="◇"
s.style.left=Math.random()*100+"%"
s.style.top=Math.random()*100+"%"
s.style.animationDuration=20+Math.random()*20+"s"

shikigamiLayer.appendChild(s)

}


/* 季節 */

const seasonLayer=document.getElementById("season-layer")
const month=new Date().getMonth()+1

let icon=""

if(month>=3&&month<=4) icon="petal"
if(month>=9&&month<=11) icon="leaf"
if(month===12||month<=2) icon="snow"

for(let i=0;i<40;i++){

const el=document.createElement("div")
el.className=icon

if(icon==="petal") el.innerText="✿"
if(icon==="leaf") el.innerText="❁"
if(icon==="snow") el.innerText="❄"

el.style.left=Math.random()*100+"%"
el.style.animationDuration=5+Math.random()*10+"s"

seasonLayer.appendChild(el)

}


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
descriptionBox.textContent=`${wafuuData[m].name}：${wafuuData[m].desc}`


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
{k:"誠実",y:"せいじつ"}
]

let quizList=[]
let index=0
let score=0

function initQuiz(){

quizList=[...kanjiData]
.sort(()=>Math.random()-0.5)
.slice(0,QUIZ_COUNT)

index=0
score=0

showQuiz()

}

function showQuiz(){

const q=quizList[index]

document.getElementById("quiz-question").textContent=
`第${index+1}問：「${q.y}」の漢字は？`

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

}

function answer(a){

const correct=quizList[index].k

document.querySelectorAll(".quiz-btn")
.forEach(b=>{
b.disabled=true
if(b.textContent===correct)b.classList.add("correct")
else b.classList.add("wrong")
})

if(a===correct) score+=10

document.getElementById("score-board").textContent="Score:"+score

}

document.getElementById("next-btn").onclick=()=>{

index++

if(index<quizList.length){

showQuiz()

}else{

document.getElementById("quiz-question").textContent="終了"
document.getElementById("quiz-choices").innerHTML=""

}

}

initQuiz()