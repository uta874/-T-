:root{
  --ink:#2f2630;
  --soft-ink:#6c5866;
  --violet:#8f6ab3;
  --violet-deep:#634281;
  --sakura:#f6b6c8;
  --sakura-pale:#ffe6ee;
  --fuji:#d9ccff;
  --paper:#fffaf0;
  --paper-warm:#fff0cf;
  --gold:#c99a2e;
  --gold-light:#ffe59c;
  --green:#5b8b75;
  --red:#b24b55;
  --white:#ffffff;
  --shadow:0 22px 54px rgba(116,78,115,.18);
  --shadow-strong:0 28px 70px rgba(100,64,110,.28);
}

*{box-sizing:border-box}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  min-height:100vh;
  color:var(--ink);
  font-family:"Noto Sans JP",sans-serif;
  line-height:1.8;
  background:
    radial-gradient(circle at 12% 6%,rgba(255,229,156,.75),transparent 24%),
    radial-gradient(circle at 88% 12%,rgba(246,182,200,.62),transparent 28%),
    radial-gradient(circle at 74% 78%,rgba(217,204,255,.62),transparent 34%),
    linear-gradient(135deg,#fff8e6 0%,#fff1f5 42%,#f4edff 100%);
  overflow-x:hidden;
}

body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:-5;
  background:
    linear-gradient(90deg,rgba(201,154,46,.08) 1px,transparent 1px),
    linear-gradient(rgba(201,154,46,.07) 1px,transparent 1px);
  background-size:38px 38px;
  mask-image:linear-gradient(to bottom,rgba(0,0,0,.8),rgba(0,0,0,.16));
}

a{
  color:inherit;
}

#skyPattern{
  position:fixed;
  inset:0;
  z-index:-4;
  pointer-events:none;
  background-image:
    radial-gradient(circle at center,rgba(255,255,255,.85) 0 2px,transparent 2.8px),
    radial-gradient(circle at center,rgba(201,154,46,.45) 0 1px,transparent 1.8px);
  background-size:150px 150px,94px 94px;
  opacity:.5;
}

#floatingObjects,#petals{
  position:fixed;
  inset:0;
  pointer-events:none;
  overflow:hidden;
  z-index:-1;
}

.floatObject{
  position:absolute;
  width:92px;
  height:54px;
  border-radius:54px 54px 10px 10px;
  background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,222,234,.72));
  border:1px solid rgba(255,255,255,.9);
  box-shadow:0 16px 34px rgba(143,106,179,.16);
  animation:floatAcross linear infinite;
}

.floatObject::before,.floatObject::after{
  content:"";
  position:absolute;
  bottom:8px;
  width:34px;
  height:34px;
  border-radius:50%;
  background:rgba(255,255,255,.88);
}

.floatObject::before{left:13px}
.floatObject::after{right:13px}

.petal{
  position:absolute;
  top:-48px;
  width:13px;
  height:20px;
  border-radius:13px 2px 13px 2px;
  background:linear-gradient(135deg,#f49abb,#fff1f5 70%);
  box-shadow:0 5px 12px rgba(178,75,85,.15);
  opacity:.78;
  animation:petalFall linear infinite;
}

@keyframes petalFall{
  from{transform:translate3d(0,-50px,0) rotate(0deg)}
  to{transform:translate3d(var(--drift),110vh,0) rotate(420deg)}
}

@keyframes floatAcross{
  from{transform:translateX(-20vw) translateY(0)}
  50%{transform:translateX(50vw) translateY(-18px)}
  to{transform:translateX(120vw) translateY(8px)}
}

.hero{
  position:relative;
  min-height:82vh;
  display:grid;
  place-items:center;
  padding:54px 20px 36px;
  overflow:hidden;
}

.hero::before{
  content:"雅";
  position:absolute;
  right:clamp(16px,8vw,120px);
  top:24px;
  color:rgba(143,106,179,.11);
  font-family:"Shippori Mincho",serif;
  font-size:clamp(140px,25vw,300px);
  font-weight:700;
  writing-mode:vertical-rl;
  line-height:1;
}

.hero::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:-70px;
  width:min(980px,92vw);
  height:180px;
  transform:translateX(-50%);
  background:radial-gradient(ellipse at center,rgba(255,255,255,.92),transparent 67%);
  filter:blur(8px);
}

.moonObject{
  position:absolute;
  left:clamp(20px,8vw,120px);
  top:68px;
  width:126px;
  height:126px;
  border-radius:50%;
  background:radial-gradient(circle at 35% 35%,#fffdf1 0 22%,#ffe59c 55%,#e4b849 100%);
  box-shadow:0 0 70px rgba(255,229,156,.8),0 18px 42px rgba(201,154,46,.22);
  animation:moonFloat 7s ease-in-out infinite;
}

.moonObject::after{
  content:"";
  position:absolute;
  inset:18px -10px 0 42px;
  border-radius:50%;
  background:rgba(255,248,230,.74);
}

@keyframes moonFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
}

.heroInner{
  position:relative;
  z-index:1;
  width:min(1020px,100%);
  text-align:center;
  padding:42px 24px 32px;
}

.eyebrow,.sectionKicker{
  margin:0 0 10px;
  color:var(--violet-deep);
  font-size:13px;
  font-weight:900;
  letter-spacing:.08em;
  text-transform:uppercase;
}

#title{