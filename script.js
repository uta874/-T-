/* 桜 */

for(let i=0;i<15;i++){

let p=document.createElement("div")
p.innerHTML="🌸"

p.style.position="fixed"
p.style.left=Math.random()*100+"%"
p.style.top=Math.random()*100+"%"
p.style.opacity=.6

document.body.appendChild(p)

}

/* 和暦 */

const wareki=document.getElementById("wareki")
const wafuu=document.getElementById("wafuu")
const descriptionBox=document.getElementById("month-description")

const formatter=new Intl.DateTimeFormat("ja-JP-u-ca-japanese",
{era:"long",year:"numeric",month:"numeric",day:"numeric"})

const wafuuData=[
{name:"睦月",desc:"正月に人々が集まり仲睦まじく過ごす月"},
{name:"如月",desc:"衣を重ねて着る月"},
{name:"弥生",desc:"草木が生い茂る月"},
{name:"卯月",desc:"卯の花の咲く月"},
{name:"皐月",desc:"田植えの月"},
{name:"水無月",desc:"水の月"},
{name:"文月",desc:"書物を開く月"},
{name:"葉月",desc:"葉の落ちる月"},
{name:"長月",desc:"夜長月"},
{name:"神無月",desc:"神々が出雲に集まる月"},
{name:"霜月",desc:"霜の降りる月"},
{name:"師走",desc:"僧も走る忙しい月"}
]

const today=new Date()

wareki.textContent=formatter.format(today)
wafuu.textContent="（"+wafuuData[today.getMonth()].name+"）"

descriptionBox.textContent=
wafuuData[today.getMonth()].name+"："+wafuuData[today.getMonth()].desc