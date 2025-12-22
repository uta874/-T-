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




document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("質問を受け付けました。");

    this.reset();
});
