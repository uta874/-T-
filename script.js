const calendar = document.getElementById("calendar");
const wareki = document.getElementById("wareki");

// 和暦表示用フォーマッタ
const warekiFormatter = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
    era: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
});

// 今日の日付を初期表示
const today = new Date();
calendar.valueAsDate = today;
wareki.textContent = warekiFormatter.format(today);

// カレンダー変更時
calendar.addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    wareki.textContent = warekiFormatter.format(selectedDate);
});


document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("質問を受け付けました。");

    this.reset();
});
