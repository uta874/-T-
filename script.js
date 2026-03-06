const kokugoQuiz=[

{question:"「未曽有」の読み方は？",choices:["みぞうゆう","みぞゆう","みそうゆう"],answer:0},
{question:"「琴線に触れる」の意味は？",choices:["怒らせる","心に強く響く","驚かせる"],answer:1},
{question:"「馬耳東風」の意味は？",choices:["努力する","話をよく聞く","人の話を気にしない"],answer:2},
{question:"「杞憂」とは？",choices:["ありえない心配","強い怒り","楽しい気持ち"],answer:0},
{question:"「臨機応変」とは？",choices:["急いで行動する","状況に応じて対応する","必ず同じ方法"],answer:1}

];

let quizSet=kokugoQuiz.sort(()=>0.5-Math.random()).slice(0,10);
let index=0;
let score=0;

function showQuestion(){

let q=quizSet[index];

document.getElementById("quiz").innerHTML=
"問題 "+(index+1)+" / 10<br><br>"+q.question;

let html="";

q.choices.forEach((choice,i)=>{
html+=`<div class="choice" onclick="answer(${i})">${choice}</div>`;
});

document.getElementById("choices").innerHTML=html;

}

function answer(i){

let q=quizSet[index];

if(i===q.answer){
score++;
document.getElementById("result").innerHTML="⭕ 正解！";
}else{
document.getElementById("result").innerHTML="❌ 不正解";
}

}

function nextQuestion(){

index++;

document.getElementById("result").innerHTML="";

if(index>=quizSet.length){
finish();
}else{
showQuestion();
}

}

function finish(){

document.getElementById("quiz").innerHTML=
"終了！得点："+score+" / "+quizSet.length;

document.getElementById("choices").innerHTML="";

showOmikuji();

}

function showOmikuji(){

let luck;

if(score>=9) luck="🌸 大吉";
else if(score>=7) luck="✨ 中吉";
else if(score>=5) luck="😊 小吉";
else luck="😢 末吉";

document.getElementById("omikuji").innerHTML="おみくじ："+luck;

}

showQuestion();

/* 桜生成 */

const petals=document.getElementById("petals");

for(let i=0;i<40;i++){

let p=document.createElement("div");
p.className="petal";
p.innerHTML="✿";
p.style.left=Math.random()*100+"%";
p.style.animationDuration=5+Math.random()*10+"s";

petals.appendChild(p);

}