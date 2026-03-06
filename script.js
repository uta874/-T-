/* =========================
   国語常識クイズデータ
========================= */

const kokugoQuiz = [

{
question:"「未曽有」の読み方は？",
choices:["みぞう","みぞゆう","みそうゆう"],
answer:0
},

{
question:"「琴線に触れる」の意味は？",
choices:["怒らせる","心に強く響く","驚かせる"],
answer:1
},

{
question:"「馬耳東風」の意味は？",
choices:["努力する","話をよく聞く","人の話を気にしない"],
answer:2
},

{
question:"「杞憂」とは？",
choices:["ありえない心配","強い怒り","楽しい気持ち"],
answer:0
},

{
question:"「臨機応変」とは？",
choices:["急いで行動する","状況に応じて対応する","必ず同じ方法"],
answer:1
},

{
question:"「一石二鳥」の意味は？",
choices:["二回失敗する","一度で二つ利益","石を投げる"],
answer:1
},

{
question:"「温故知新」の意味は？",
choices:["昔から学ぶ","新しいだけ学ぶ","昔を忘れる"],
answer:0
},

{
question:"「異口同音」とは？",
choices:["同じことを言う","違うことを言う","音楽が上手"],
answer:0
},

{
question:"「起死回生」の意味は？",
choices:["危機から立ち直る","負ける","眠る"],
answer:0
},

{
question:"「自業自得」とは？",
choices:["運が悪い","自分の行いの結果","他人の責任"],
answer:1
},

{
question:"「走れメロス」の作者は？",
choices:["太宰治","夏目漱石","芥川龍之介"],
answer:0
},

{
question:"「坊っちゃん」の作者は？",
choices:["宮沢賢治","夏目漱石","太宰治"],
answer:1
},

{
question:"「注文の多い料理店」の作者は？",
choices:["宮沢賢治","芥川龍之介","川端康成"],
answer:0
},

{
question:"「羅生門」の作者は？",
choices:["森鴎外","芥川龍之介","太宰治"],
answer:1
},

{
question:"「雪国」の作者は？",
choices:["川端康成","谷崎潤一郎","太宰治"],
answer:0
},

{
question:"「猿も木から落ちる」の意味は？",
choices:["上手でも失敗する","猿は木が苦手","木が危険"],
answer:0
},

{
question:"「石の上にも三年」の意味は？",
choices:["辛抱すれば成功","石は冷たい","三年は長い"],
answer:0
},

{
question:"「犬も歩けば棒に当たる」の意味は？",
choices:["犬は危険","歩くと災難もある","棒が多い"],
answer:1
},

{
question:"「七転び八起き」の意味は？",
choices:["よく転ぶ","失敗しても立ち上がる","八回転ぶ"],
answer:1
},

{
question:"「急がば回れ」の意味は？",
choices:["急ぐべき","遠回りが安全","急ぐと得"],
answer:1
},

{
question:"「走る」は何詞？",
choices:["名詞","動詞","形容詞"],
answer:1
},

{
question:"「美しい」は何詞？",
choices:["形容詞","名詞","副詞"],
answer:0
},

{
question:"「とても」は何詞？",
choices:["副詞","助詞","名詞"],
answer:0
},

{
question:"「しかし」は何詞？",
choices:["接続詞","助詞","動詞"],
answer:0
},

{
question:"「〜です」は何？",
choices:["助動詞","名詞","副詞"],
answer:0
},

{
question:"「的を射る」の意味は？",
choices:["弓を打つ","要点をつく","外す"],
answer:1
},

{
question:"「役不足」の本来の意味は？",
choices:["役が重い","役が軽すぎる","役がちょうど"],
answer:1
},

{
question:"「敷居が高い」の本来の意味は？",
choices:["高級店","行きにくい事情","店が高い"],
answer:1
},

{
question:"「情けは人のためならず」の意味は？",
choices:["優しさは巡る","人のためだけ","優しくしない"],
answer:0
},

{
question:"「二の足を踏む」の意味は？",
choices:["迷う","走る","転ぶ"],
answer:0
}

];


/* =========================
   クイズロジック
========================= */

let quizSet = [];
let index = 0;
let score = 0;

function initQuiz(){

quizSet=[...kokugoQuiz]
.sort(()=>Math.random()-0.5)
.slice(0,10);

index=0;
score=0;

showQuestion();

}

function showQuestion(){

let q=quizSet[index];

document.getElementById("quiz").innerHTML=
"問題 "+(index+1)+" / 10<br><br>"+q.question;

let html="";

q.choices.forEach((choice,i)=>{

html+=`
<div class="choice" onclick="answer(${i})">
${choice}
</div>
`;

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


/* =========================
   次の問題
========================= */

function nextQuestion(){

index++;

document.getElementById("result").innerHTML="";

if(index>=quizSet.length){

finish();

}else{

showQuestion();

}

}


/* =========================
   終了
========================= */

function finish(){

document.getElementById("quiz").innerHTML=
"終了！得点："+score+" / 10";

document.getElementById("choices").innerHTML="";

showOmikuji();

saveRanking();

showRanking();

}


/* =========================
   おみくじ
========================= */

function showOmikuji(){

let luck;

if(score>=9) luck="🌸 大吉";
else if(score>=7) luck="✨ 中吉";
else if(score>=5) luck="😊 小吉";
else luck="😢 末吉";

document.getElementById("omikuji").innerHTML="おみくじ："+luck;

}


/* =========================
   ランキング保存
========================= */

function saveRanking(){

let name=prompt("名前を入力");

let ranking=JSON.parse(localStorage.getItem("kokugoRanking")||"[]");

ranking.push({name:name,score:score});

ranking.sort((a,b)=>b.score-a.score);

ranking=ranking.slice(0,10);

localStorage.setItem("kokugoRanking",JSON.stringify(ranking));

}


/* =========================
   ランキング表示
========================= */

function showRanking(){

let ranking=JSON.parse(localStorage.getItem("kokugoRanking")||"[]");

let html="";

ranking.forEach(r=>{

html+="<li>"+r.name+" "+r.score+"点</li>";

});

document.getElementById("ranking").innerHTML=html;

}


/* =========================
   初期化
========================= */

showRanking();
initQuiz();