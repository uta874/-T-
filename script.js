/* ===== 全体を少し高級感ある表示に ===== */

main{
max-width:1100px;
margin:auto;
padding:20px;
}

/* セクションタイトル */
h2{
text-align:center;
margin-top:60px;
margin-bottom:30px;
font-size:28px;
letter-spacing:3px;
color:#e8d6a0;
position:relative;
}

h2::after{
content:"";
display:block;
width:120px;
height:1px;
background:gold;
margin:10px auto;
}

/* ワークシートの箱をカード風に */
.gradeBox{
background:linear-gradient(135deg,#f5e6c8,#e8d6a0);
color:#000;
padding:20px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.5);
width:260px;
transition:transform 0.3s, box-shadow 0.3s;
position:relative;
}

/* 和風カード風の飾り */
.gradeBox::before{
content:"";
position:absolute;
top:5px;
left:5px;
right:5px;
bottom:5px;
border:1px solid rgba(0,0,0,0.2);
border-radius:10px;
pointer-events:none;
}

.gradeBox:hover{
transform:translateY(-8px);
box-shadow:0 20px 40px rgba(0,0,0,0.7);
}

/* リンクを和風ボタン風に */
.gradeBox a{
text-decoration:none;
color:#000;
padding:4px 6px;
border-radius:4px;
transition:background 0.2s;
}

.gradeBox a:hover{
background:rgba(0,0,0,0.1);
}

/* ナビボタンを少し高級感 */
#mainNav a{
margin:10px;
padding:12px 24px;
background:linear-gradient(145deg,#1a1a22,#0f0f15);
border:1px solid #c8a95a;
border-radius:10px;
color:#e8d6a0;
text-decoration:none;
box-shadow:0 5px 15px rgba(0,0,0,0.5);
transition:all 0.3s;
}

#mainNav a:hover{
transform:translateY(-3px);
box-shadow:0 10px 25px rgba(0,0,0,0.8);
}

/* クイズ部分をカード化 */
#kanjiQuiz, #kokugoQuiz{
background:rgba(20,20,30,0.6);
padding:30px;
margin:40px 0;
border-radius:15px;
box-shadow:0 0 20px rgba(0,0,0,0.5);
}

/* 選択肢をボタン風に */
.choice{
padding:14px;
margin:10px auto;
border:1px solid #444;
cursor:pointer;
text-align:center;
max-width:300px;
border-radius:8px;
background:rgba(0,0,0,0.3);
transition:all 0.2s;
}

.choice:hover{
background:#2a2a38;
transform:scale(1.05);
}

/* フッター */
footer{
text-align:center;
padding:30px;
color:#888;
font-size:14px;
border-top:1px solid #333;
margin-top:40px;
}