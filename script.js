/* 和暦 */

const formatter =
new Intl.DateTimeFormat("ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"});

document.getElementById("wareki").textContent =
formatter.format(new Date());



/* 桜パーティクル */

function createPetal(){

let petal=document.createElement("div")

petal.innerHTML="🌸"

petal.style.position="fixed"
petal.style.top="-10px"
petal.style.left=Math.random()*window.innerWidth+"px"
petal.style.fontSize="20px"

document.body.appendChild(petal)

let fall=setInterval(()=>{

petal.style.top=petal.offsetTop+2+"px"

if(petal.offsetTop>window.innerHeight){

petal.remove()
clearInterval(fall)

}

},30)

}

setInterval(createPetal,400)



/* 入試漢字 */

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
{k:"主張",y:"しゅちょう"},
{k:"把握",y:"はあく"},
{k:"推測",y:"すいそく"},
{k:"検討",y:"けんとう"},
{k:"適切",y:"てきせつ"},
{k:"根拠",y:"こんきょ"},
{k:"証明",y:"しょうめい"},
{k:"分析",y:"ぶんせき"},
{k:"比較",y:"ひかく"},
{k:"抽象",y:"ちゅうしょう"},
{k:"具体",y:"ぐたい"},
{k:"概念",y:"がいねん"},
{k:"視点",y:"してん"},
{k:"論述",y:"ろんじゅつ"},
{k:"展開",y:"てんかい"},
{k:"整理",y:"せいり"},
{k:"引用",y:"いんよう"},
{k:"要旨",y:"ようし"},
{k:"説明",y:"せつめい"},
{k:"観察",y:"かんさつ"},
{k:"記述",y:"きじゅつ"},
{k:"論争",y:"ろんそう"},
{k:"論評",y:"ろんぴょう"},
{k:"創造",y:"そうぞう"},
{k:"改善",y:"かいぜん"},
{k:"実践",y:"じっせん"},
{k:"克服",y:"こくふく"},
{k:"発展",y:"はってん"},
{k:"貢献",y:"こうけん"},
{k:"実現",y:"じつげん"},
{k:"理解",y:"りかい"},
{k:"認識",y:"にんしき"},
{k:"観点",y:"かんてん"},
{k:"推進",y:"すいしん"},
{k:"維持",y:"いじ"},
{k:"変化",y:"へんか"},
{k:"影響",y:"えいきょう"},
{k:"環境",y:"かんきょう"},
{k:"社会",y:"しゃかい"},
{k:"文化",y:"ぶんか"},
{k:"歴史",y:"れきし"},
{k:"現象",y:"げんしょう"},
{k:"原因",y:"げんいん"},
{k:"結果",y:"けっか"},
{k:"条件",y:"じょうけん"},
{k:"課題",y:"かだい"},
{k:"問題",y:"もんだい"},
{k:"解決",y:"かいけつ"},
{k:"努力",y:"どりょく"},
{k:"成功",y:"せいこう"},
{k:"失敗",y:"しっぱい"},
{k:"経験",y:"けいけん"},
{k:"判断",y:"はんだん"},
{k:"選択",y:"せんたく"},
{k:"決断",y:"けつだん"},
{k:"挑戦",y:"ちょうせん"},
{k:"応用",y:"おうよう"},
{k:"工夫",y:"くふう"},
{k:"提案",y:"ていあん"},
{k:"議論",y:"ぎろん"},
{k:"賛成",y:"さんせい"},
{k:"反対",y:"はんたい"},
{k:"結論",y:"けつろん"},
{k:"発見",y:"はっけん"},
{k:"研究",y:"けんきゅう"},
{k:"調査",y:"ちょうさ"},
{k:"資料",y:"しりょう"},
{k:"情報",y:"じょうほう"},
{k:"共有",y:"きょうゆう"},
{k:"交流",y:"こうりゅう"},
{k:"協力",y:"きょうりょく"},
{k:"団結",y:"だんけつ"},
{k:"信頼",y:"しんらい"},
{k:"友情",y:"ゆうじょう"},
{k:"感謝",y:"かんしゃ"},
{k:"尊敬",y:"そんけい"},
{k:"努力",y:"どりょく"},
{k:"誇り",y:"ほこり"},
{k:"使命",y:"しめい"},
{k:"理想",y:"りそう"},
{k:"現実",y:"げんじつ"},
{k:"未来",y:"みらい"},
{k:"希望",y:"きぼう"},
{k:"勇気",y:"ゆうき"},
{k:"挑戦",y:"ちょうせん"},
{k:"達成",y:"たっせい"},
{k:"発想",y:"はっそう"},
{k:"創意",y:"そうい"},
{k:"計画",y:"けいかく"},
{k:"準備",y:"じゅんび"},
{k:"継続",y:"けいぞく"},
{k:"習慣",y:"しゅうかん"},
{k:"改善",y:"かいぜん"},
{k:"効率",y:"こうりつ"},
{k:"成長",y:"せいちょう"},
{k:"向上",y:"こうじょう"},
{k:"貢献",y:"こうけん"},
{k:"実績",y:"じっせき"},
{k:"評価",y:"ひょうか"},
{k:"責任",y:"せきにん"},
{k:"自覚",y:"じかく"},
{k:"自信",y:"じしん"},
{k:"自立",y:"じりつ"},
{k:"自由",y:"じゆう"}

]

let kIndex=0

function showKanji(){

let q=kanjiData[kIndex]

document.getElementById("kanjiQuestion")
.innerHTML="「"+q.y+"」の漢字は？"

let choices=[q.k]

while(choices.length<3){

let r=kanjiData[Math.floor(Math.random()*kanjiData.length)].k

if(!choices.includes(r))choices.push(r)

}

choices.sort(()=>Math.random()-0.5)

let html=""

choices.forEach(c=>{

html+=`<div class="choice" onclick="checkKanji('${c}')">${c}</div>`

})

document.getElementById("kanjiChoices").innerHTML=html

}

function checkKanji(c){

let q=kanjiData[kIndex]

if(c===q.k){

alert("正解")

}else{

alert("不正解")

}

}

function nextKanji(){

kIndex++

if(kIndex>=kanjiData.length){

kIndex=0

}

showKanji()

}

showKanji()



/* 国語クイズ */

const kokugoQuiz=[

{question:"未曽有の読み方は？",choices:["みぞう","みぞゆう","みそうゆう"],answer:0},
{question:"琴線に触れるの意味は？",choices:["怒らせる","心に響く","驚かせる"],answer:1},
{question:"馬耳東風の意味は？",choices:["努力する","話を聞く","人の話を気にしない"],answer:2},
{question:"杞憂とは？",choices:["ありえない心配","強い怒り","楽しい気持ち"],answer:0},
{question:"臨機応変とは？",choices:["急いで行動","状況に応じる","同じ方法"],answer:1},
{question:"一石二鳥とは？",choices:["二回失敗","一度で二つ得る","石を投げる"],answer:1},
{question:"温故知新とは？",choices:["昔から学ぶ","新しいだけ","昔を忘れる"],answer:0},
{question:"異口同音とは？",choices:["違う意見","同じことを言う","歌が上手"],answer:1},
{question:"起死回生とは？",choices:["眠る","危機から回復","落ち込む"],answer:1},
{question:"自業自得とは？",choices:["運が悪い","自分の行いの結果","他人の責任"],answer:1},

{question:"『走れメロス』の作者は？",choices:["太宰治","夏目漱石","芥川龍之介"],answer:0},
{question:"『坊っちゃん』の作者は？",choices:["宮沢賢治","夏目漱石","太宰治"],answer:1},
{question:"『羅生門』の作者は？",choices:["芥川龍之介","森鴎外","太宰治"],answer:0},
{question:"『山月記』の作者は？",choices:["中島敦","太宰治","夏目漱石"],answer:0},
{question:"『雪国』の作者は？",choices:["川端康成","谷崎潤一郎","芥川龍之介"],answer:0},

{question:"俳句の基本音数は？",choices:["5-7-5","7-7","5-5-7"],answer:0},
{question:"短歌の音数は？",choices:["5-7-5-7-7","5-7-5","7-7"],answer:0},
{question:"俳句の季節語は？",choices:["枕詞","季語","序詞"],answer:1},
{question:"万葉集は何？",choices:["和歌集","物語","日記"],answer:0},
{question:"古今和歌集は？",choices:["勅撰和歌集","小説","俳句"],answer:0},

{question:"石の上にも三年とは？",choices:["石は冷たい","辛抱すれば成功","三年待つ"],answer:1},
{question:"猿も木から落ちるとは？",choices:["猿は弱い","上手でも失敗","木が危険"],answer:1},
{question:"急がば回れとは？",choices:["遠回りが安全","急ぐ","走る"],answer:0},
{question:"七転び八起きとは？",choices:["よく転ぶ","何度でも立ち上がる","八回転ぶ"],answer:1},
{question:"犬も歩けば棒に当たるとは？",choices:["災難にあう","犬が危険","棒が多い"],answer:0},

{question:"「走る」は何詞？",choices:["名詞","動詞","形容詞"],answer:1},
{question:"「美しい」は何詞？",choices:["形容詞","名詞","副詞"],answer:0},
{question:"「とても」は何詞？",choices:["副詞","助詞","名詞"],answer:0},
{question:"「しかし」は何詞？",choices:["接続詞","動詞","名詞"],answer:0},
{question:"「〜です」は何？",choices:["助動詞","名詞","副詞"],answer:0},

{question:"五月雨の読み方は？",choices:["さみだれ","ごがつあめ","さつきあめ"],answer:0},
{question:"紅葉の読み方は？",choices:["こうよう","もみじ","べにば"],answer:1},
{question:"曖昧の読み方は？",choices:["あいまい","えいまい","あいめい"],answer:0},
{question:"顕著の読み方は？",choices:["けんちょ","けんしょ","けんじょ"],answer:0},
{question:"模索の読み方は？",choices:["もさく","ぼさく","もさ"],answer:0},

{question:"以心伝心の意味は？",choices:["心が通じる","努力する","怒る"],answer:0},
{question:"電光石火の意味は？",choices:["とても速い","雷が怖い","石が光る"],answer:0},
{question:"十人十色の意味は？",choices:["人それぞれ","十人いる","色が多い"],answer:0},
{question:"前代未聞の意味は？",choices:["聞いたことない","古い話","有名"],answer:0},
{question:"用意周到の意味は？",choices:["準備十分","急ぐ","準備不足"],answer:0}

]

let quizSet=[]
let quizIndex=0

function initQuiz(){

quizSet=[...kokugoQuiz]
.sort(()=>Math.random()-0.5)

quizIndex=0

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