document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("質問を受け付けました。");

    this.reset();
});
