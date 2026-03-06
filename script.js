/* 和暦 */

const formatter =
new Intl.DateTimeFormat("ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"});

document.getElementById("wareki").textContent =
formatter.format(new Date());



/* 入試漢字問題 */

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

];

let kIndex=0;

function showKanji(){

let q=kanjiData[kIndex];

document.getElementById("kanjiQuestion")
.innerHTML="「"+q.y+"」の漢字は？";

let choices=[q.k];

while(choices.length<3){

let r=kanjiData[Math.floor(Math.random()*kanjiData.length)].k;

if(!choices.includes(r))choices.push(r);

}

choices.sort(()=>Math.random()-0.5);

let html="";

choices.forEach(c=>{

html+=`<div class="choice" onclick="checkKanji('${c}')">${c}</div>`;

});

document.getElementById("kanjiChoices").innerHTML=html;

}

function checkKanji(c){

let q=kanjiData[kIndex];

if(c===q.k){

alert("正解");

}else{

alert("不正解");

}

}

function nextKanji(){

kIndex++;

if(kIndex>=kanjiData.length){

kIndex=0;

}

showKanji();

}

showKanji();



/* 国語常識問題 */

const kokugoQuiz=[

{question:"未曽有の読み方は？",choices:["みぞうゆう","みぞゆう","みそうゆう"],answer:0},

{question:"琴線に触れるの意味は？",choices:["怒らせる","心に強く響く","驚かせる"],answer:1},

{question:"馬耳東風とは？",choices:["努力する","話をよく聞く","人の話を気にしない"],answer:2},

{question:"杞憂とは？",choices:["ありえない心配","強い怒り","楽しい気持ち"],answer:0},

{question:"臨機応変とは？",choices:["急いで行動する","状況に応じて対応する","必ず同じ方法"],answer:1},

{question:"一石二鳥の意味は？",choices:["二回失敗する","一度で二つ利益","石を投げる"],answer:1}

];

let quizIndex=0;

function showQuestion(){

let q=kokugoQuiz[quizIndex];

document.getElementById("quiz").innerHTML=q.question;

let html="";

q.choices.forEach((c,i)=>{

html+=`<div class="choice" onclick="checkAnswer(${i})">${c}</div>`;

});

document.getElementById("choices").innerHTML=html;

}

function checkAnswer(i){

let q=kokugoQuiz[quizIndex];

if(i===q.answer){

document.getElementById("result").innerHTML="⭕ 正解";

}else{

document.getElementById("result").innerHTML="❌ 不正解";

}

}

function nextQuestion(){

quizIndex++;

if(quizIndex>=kokugoQuiz.length){

quizIndex=0;

}

showQuestion();

}

showQuestion();

/* =========================
   国語常識クイズ問題
========================= */

const kokugoQuiz = [

{question:"「未曽有」の読み方は？",choices:["みぞうゆう","みぞゆう","みそうゆう"],answer:0},
{question:"「琴線に触れる」の意味は？",choices:["怒らせる","心に強く響く","驚かせる"],answer:1},
{question:"「馬耳東風」の意味は？",choices:["努力する","よく聞く","人の意見を気にしない"],answer:2},
{question:"「杞憂」とは？",choices:["ありえない心配","強い怒り","楽しい気持ち"],answer:0},
{question:"「臨機応変」の意味は？",choices:["急いで行動","状況に合わせて対応","必ず同じ方法"],answer:1},
{question:"「一石二鳥」の意味は？",choices:["一度で二つ得る","石を二つ投げる","二回失敗"],answer:0},
{question:"「温故知新」の意味は？",choices:["昔から学ぶ","新しいだけ学ぶ","昔を忘れる"],answer:0},
{question:"「異口同音」の意味は？",choices:["違うことを言う","皆同じことを言う","音楽が上手"],answer:1},
{question:"「起死回生」の意味は？",choices:["眠る","危機から立ち直る","落ち込む"],answer:1},
{question:"「自業自得」とは？",choices:["運が悪い","他人の責任","自分の行いの結果"],answer:2},

{question:"『走れメロス』の作者は？",choices:["太宰治","夏目漱石","芥川龍之介"],answer:0},
{question:"『坊っちゃん』の作者は？",choices:["宮沢賢治","夏目漱石","太宰治"],answer:1},
{question:"『注文の多い料理店』の作者は？",choices:["宮沢賢治","芥川龍之介","川端康成"],answer:0},
{question:"『羅生門』の作者は？",choices:["森鴎外","芥川龍之介","太宰治"],answer:1},
{question:"『雪国』の作者は？",choices:["川端康成","谷崎潤一郎","太宰治"],answer:0},
{question:"『銀河鉄道の夜』の作者は？",choices:["宮沢賢治","芥川龍之介","夏目漱石"],answer:0},
{question:"『こころ』の作者は？",choices:["夏目漱石","太宰治","森鴎外"],answer:0},
{question:"『人間失格』の作者は？",choices:["川端康成","太宰治","谷崎潤一郎"],answer:1},
{question:"『舞姫』の作者は？",choices:["森鴎外","芥川龍之介","太宰治"],answer:0},
{question:"『山月記』の作者は？",choices:["中島敦","太宰治","夏目漱石"],answer:0},

{question:"「猿も木から落ちる」の意味は？",choices:["上手でも失敗","猿は木が苦手","木が危険"],answer:0},
{question:"「石の上にも三年」の意味は？",choices:["石は冷たい","辛抱すれば成功","三年は長い"],answer:1},
{question:"「犬も歩けば棒に当たる」の意味は？",choices:["犬は危険","歩くと災難","棒が多い"],answer:1},
{question:"「七転び八起き」の意味は？",choices:["よく転ぶ","失敗しても立ち上がる","八回転ぶ"],answer:1},
{question:"「急がば回れ」の意味は？",choices:["遠回りが安全","急ぐべき","急ぐと得"],answer:0},

{question:"「走る」は何詞？",choices:["名詞","動詞","形容詞"],answer:1},
{question:"「美しい」は何詞？",choices:["形容詞","名詞","副詞"],answer:0},
{question:"「とても」は何詞？",choices:["副詞","助詞","名詞"],answer:0},
{question:"「しかし」は何詞？",choices:["接続詞","助詞","動詞"],answer:0},
{question:"「〜です」は何？",choices:["助動詞","名詞","副詞"],answer:0},

{question:"「的を射る」の意味は？",choices:["弓を打つ","要点をつく","外す"],answer:1},
{question:"「役不足」の本来の意味は？",choices:["役が重い","役が軽すぎる","役がちょうど"],answer:1},
{question:"「敷居が高い」の本来の意味は？",choices:["高級店","不義理などで行きにくい","店が高い"],answer:1},
{question:"「情けは人のためならず」の意味は？",choices:["優しさは巡る","人のためだけ","優しくしない"],answer:0},
{question:"「二の足を踏む」の意味は？",choices:["迷う","走る","転ぶ"],answer:0},

{question:"日本最古の和歌集は？",choices:["万葉集","古今和歌集","新古今和歌集"],answer:0},
{question:"松尾芭蕉が有名な文学は？",choices:["俳句","短歌","小説"],answer:0},
{question:"俳句の基本の音数は？",choices:["5-7-5","7-7","5-5-7"],answer:0},
{question:"短歌の基本の音数は？",choices:["5-7-5-7-7","5-7-5","7-7-7"],answer:0},
{question:"俳句の季節を表す言葉は？",choices:["枕詞","季語","序詞"],answer:1},

{question:"「五月雨」の読み方は？",choices:["さみだれ","ごがつあめ","さつきあめ"],answer:0},
{question:"「紅葉」の読み方は？",choices:["こうよう","べにば","もみじ"],answer:2},
{question:"「曖昧」の読み方は？",choices:["あいまい","あいめい","えいまい"],answer:0},
{question:"「顕著」の読み方は？",choices:["けんちょ","けんしょ","けんじょ"],answer:0},
{question:"「模索」の読み方は？",choices:["もさく","ぼさく","もさ"],answer:0},

{question:"「以心伝心」の意味は？",choices:["心が通じる","強い心","伝える努力"],answer:0},
{question:"「電光石火」の意味は？",choices:["とても速い","雷が怖い","石が光る"],answer:0},
{question:"「十人十色」の意味は？",choices:["人それぞれ","10人いる","色が多い"],answer:0},
{question:"「前代未聞」の意味は？",choices:["今まで聞いたことがない","古い話","有名な話"],answer:0},
{question:"「用意周到」の意味は？",choices:["準備が十分","用意不足","急ぐ"],answer:0},

{question:"「画竜点睛」の意味は？",choices:["最後の仕上げ","龍の絵","点を描く"],answer:0}

];


/* =========================
   クイズロジック
========================= */

let quizSet=[]
let quizIndex=0
let score=0

function initQuiz(){

quizSet=[...kokugoQuiz]
.sort(()=>Math.random()-0.5)
.slice(0,10)

quizIndex=0
score=0

showQuestion()

}

function showQuestion(){

let q=quizSet[quizIndex]

document.getElementById("quiz").innerHTML=q.question

let html=""

q.choices.forEach((c,i)=>{

html+=`<div class="choice" onclick="answer(${i})">${c}</div>`

})

document.getElementById("choices").innerHTML=html

}

function answer(i){

let q=quizSet[quizIndex]

if(i===q.answer){

document.getElementById("result").innerHTML="⭕ 正解"

}else{

document.getElementById("result").innerHTML="❌ 不正解"

}

}

function nextQuestion(){

quizIndex++

if(quizIndex>=quizSet.length){

initQuiz()

}else{

showQuestion()

}

}

initQuiz()