:root{
  --ink:#17130f;
  --sumi:#2a2018;
  --night:#0d0b12;
  --paper:#f7ecd2;
  --paper-deep:#ead3a2;
  --gold:#d6b35c;
  --red:#9b2f25;
  --green:#315d4e;
  --white:#fff9ec;
  --muted:#cfc1a3;
  --shadow:0 22px 60px rgba(0,0,0,.38);
}

*{box-sizing:border-box}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  background:
    radial-gradient(circle at 18% 8%,rgba(214,179,92,.18),transparent 30%),
    radial-gradient(circle at 88% 18%,rgba(155,47,37,.16),transparent 26%),
    linear-gradient(145deg,#09070c 0%,#17120f 48%,#0c0b12 100%);
  color:var(--white);
  font-family:"Noto Sans JP",sans-serif;
  line-height:1.8;
  min-height:100vh;
}

body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background:
    linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px),
    linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:42px 42px;
  mask-image:linear-gradient(to bottom,rgba(0,0,0,.8),transparent 82%);
  z-index:-4;
}

a{
  color:inherit;
}

#stars{
  position:fixed;
  inset:0;
  background-image:
    radial-gradient(circle,rgba(255,245,203,.9) 0 1px,transparent 1.6px),
    radial-gradient(circle,rgba(255,255,255,.6) 0 1px,transparent 1.4px);
  background-size:120px 120px,190px 190px;
  background-position:0 0,40px 70px;
  opacity:.32;
  z-index:-3;
}

#petals{
  position:fixed;
  inset:0;
  pointer-events:none;
  overflow:hidden;
  z-index:-2;
}

.petal{
  position:absolute;
  top:-40px;
  width:12px;
  height:18px;
  border-radius:12px 2px 12px 2px;
  background:linear-gradient(135deg,#f3b6ba,#fff1e6);
  opacity:.72;
  animation:fall linear infinite;
}

@keyframes fall{
  from{transform:translate3d(0,-40px,0) rotate(0deg)}
  to{transform:translate3d(var(--drift),110vh,0) rotate(360deg)}
}

.hero{
  position:relative;
  overflow:hidden;
  min-height:78vh;
  display:grid;
  place-items:center;
  padding:56px 20px 36px;
  border-bottom:1px solid rgba(214,179,92,.28);
}

.hero::before{
  content:"国語";
  position:absolute;
  right:clamp(18px,7vw,120px);
  top:34px;