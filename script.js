const wareki = document.getElementById("wareki");
const wafuu = document.getElementById("wafuu");
const descriptionBox = document.getElementById("month-description");

// 和暦フォーマッタ（日本語・和暦）
const warekiFormatter = new Intl.DateTimeFormat(
    "ja-JP-u-ca-japanese",
    {
        era: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }
);

// 和風月名と由来（慣用表現）
const wafuuData = [
    { name: "睦月", desc: "正月に人々が集まり、仲睦まじく過ごすことから名付けられたとされます。" },
    { name: "如月", desc: "寒さのため衣を重ねて着る『衣更着（きさらぎ）』が由来とされます。" },
    { name: "弥生", desc: "草木がいよいよ生い茂る月という意味があります。" },
    { name: "卯月", desc: "卯の花が咲く季節に由来するとされます。" },
    { name: "皐月", desc: "田植えを始める月であることから名付けられたという説があります。" },
    { name: "水無月", desc: "『無』は助詞の『の』で、水の月という意味です。" },
    { name: "文月", desc: "稲穂が実る月、または書物を開く月という説があります。" },
    { name: "葉月", desc: "木々の葉が落ち始める季節に由来します。" },
    { name: "長月", desc: "夜が長くなる『夜長月』が語源とされます。" },
    { name: "神無月", desc: "神々が出雲に集まるため、他の地域では神がいなくなるという説があります。" },
    { name: "霜月", desc: "霜が降り始める季節であることに由来します。" },
    { name: "師走", desc: "僧（師）も走り回るほど忙しい月という説があります。" }
];

// 今日の日付で表示
const today = new Date();
const monthIndex = today.getMonth();

wareki.textContent = warekiFormatter.format(today);
wafuu.textContent = `（${wafuuData[monthIndex].name}）`;
descriptionBox.textContent =
    `${wafuuData[monthIndex].name}：${wafuuData[monthIndex].desc}`;




// ===== 漢字クイズ（読み → 漢字・ボタン式） =====

const kanjiData = [
 {k:"統率",y:"とうそつ"},{k:"慎重",y:"しんちょう"},{k:"素朴",y:"そぼく"},
 {k:"適切",y:"てきせつ"},{k:"確保",y:"かくほ"},{k:"継続",y:"けいぞく"},
 {k:"判断",y:"はんだん"},{k:"豊富",y:"ほうふ"},{k:"貴重",y:"きちょう"},
 {k:"努力",y:"どりょく"},{k:"尊重",y:"そんちょう"},{k:"影響",y:"えいきょう"},
 {k:"期待",y:"きたい"},{k:"改善",y:"かいぜん"},{k:"完了",y:"かんりょう"},
 {k:"確認",y:"かくにん"},{k:"主張",y:"しゅちょう"},{k:"状況",y:"じょうきょう"},
 {k:"誠実",y:"せいじつ"},{k:"責任",y:"せきにん"},
 {k:"判断力",y:"はんだんりょく"},{k:"慣習",y:"かんしゅう"},
 {k:"象徴",y:"しょうちょう"},{k:"伝統",y:"でんとう"},
 {k:"独立",y:"どくりつ"},{k:"柔軟",y:"じゅうなん"},
 {k:"対象",y:"たいしょう"},{k:"発展",y:"はってん"},
 {k:"評価",y:"ひょうか"},{k:"表現",y:"ひょうげん"},
 {k:"不足",y:"ふそく"},{k:"方針",y:"ほうしん"},
 {k:"本質",y:"ほんしつ"},{k:"無駄",y:"むだ"},
 {k:"明確",y:"めいかく"},{k:"優先",y:"ゆうせん"},
 {k:"要因",y:"よういん"},{k:"理解",y:"りかい"},
 {k:"連続",y:"れんぞく"},{k:"論理",y:"ろんり"},
 {k:"構造",y:"こうぞう"},{k:"主体",y:"しゅたい"},
 {k:"抽象",y:"ちゅうしょう"},{k:"到達",y:"とうたつ"},
 {k:"内面",y:"ないめん"},{k:"把握",y:"はあく"},
 {k:"普遍",y:"ふへん"},{k:"本文",y:"ほんぶん"},
 {k:"要約",y:"ようやく"},{k:"再考",y:"さいこう"}
];

let quizList = [];
let quizIndex = 0;
let correctCount = 0;

const qEl = document.getElementById("quiz-question");
const cEl = document.getElementById("quiz-choices");
const rEl = document.getElementById("quiz-result");
const nBtn = document.getElementById("next-btn");
const retryArea = document.getElementById("retry-area");

function createQuiz(shuffle) {
  const base = [...kanjiData];
  if (shuffle) base.sort(() => Math.random() - 0.5);
  quizList = base.slice(0, 10);
  quizIndex = 0;
  correctCount = 0;
  nBtn.disabled = false;
  retryArea.style.display = "none";
  showQuiz();
}

function showQuiz() {
  cEl.innerHTML = "";
  rEl.textContent = "";

  const q = quizList[quizIndex];
  qEl.textContent =
    `第${quizIndex + 1}問：「${q.y}」に当てはまる漢字はどれ？`;

  const choices = [
    q.k,
    kanjiData[Math.floor(Math.random() * kanjiData.length)].k,
    kanjiData[Math.floor(Math.random() * kanjiData.length)].k
  ].sort(() => Math.random() - 0.5);

  choices.forEach(v => {
    const btn = document.createElement("button");
    btn.textContent = v;
    btn.className = "quiz-btn";
    btn.onclick = () => answer(v);
    cEl.appendChild(btn);
  });
}

function answer(selected) {
  document.querySelectorAll(".quiz-btn").forEach(b => b.disabled = true);

  if (selected === quizList[quizIndex].k) {
    correctCount++;
    rEl.textContent = "正解";
  } else {
    rEl.textContent = `不正解（正解：${quizList[quizIndex].k}）`;
  }
}

nBtn.onclick = () => {
  quizIndex++;
  if (quizIndex < quizList.length) {
    showQuiz();
  } else {
    qEl.textContent = "全問終了";
    cEl.innerHTML = "";
    rEl.textContent = `10問中 ${correctCount} 問正解でした。`;
    nBtn.disabled = true;
    retryArea.style.display = "block";
  }
};

document.getElementById("retry-same").onclick = () => createQuiz(false);
document.getElementById("retry-new").onclick = () => createQuiz(true);

// 初期化
createQuiz(true);



