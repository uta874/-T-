const warekiFormatter = new Intl.DateTimeFormat(
  "ja-JP-u-ca-japanese",
  { era:"long", year:"numeric", month:"long", day:"numeric", weekday:"long" }
);

const kyurekiFormatter = new Intl.DateTimeFormat(
  "ja-JP-u-ca-chinese",
  { year:"numeric", month:"long", day:"numeric" }
);

const today = new Date();
const wareki = warekiFormatter.format(today);
let kyureki = "";

try{
  kyureki = kyurekiFormatter.format(today);
}catch(error){
  kyureki = "表示に対応していません";
}

document.getElementById("wareki").textContent = wareki;
document.getElementById("kyureki").textContent = kyureki;
document.getElementById("kyurekiLarge").textContent = kyureki;

const oldMonthNames = [
  ["睦月","むつき","旧暦一月","親しい人々が集まり、むつみ合う月。"],
  ["如月","きさらぎ","旧暦二月","寒さが残り、衣を重ねるころの月。"],
  ["弥生","やよい","旧暦三月","草木がいよいよ生い茂る月。"],
  ["卯月","うづき","旧暦四月","卯の花が咲くころの月。"],
  ["皐月","さつき","旧暦五月","田植えに関わる早苗の月。"],
  ["水無月","みなづき","旧暦六月","田に水を引くころの月。"],
  ["文月","ふみづき","旧暦七月","稲穂や文にまつわる名をもつ月。"],
  ["葉月","はづき","旧暦八月","木の葉が色づき落ち始める月。"],
  ["長月","ながつき","旧暦九月","夜が長く感じられる月。"],
  ["神無月","かんなづき","旧暦十月","神々にまつわる伝承をもつ月。"],
  ["霜月","しもつき","旧暦十一月","霜が降りるころの月。"],
  ["師走","しわす","旧暦十二月","年末で師も忙しく走るとされる月。"]
];

const dailyQ = [
  ["徒然草の作者は？","吉田兼好","随筆文学の代表作です。"],
  ["枕草子の作者は？","清少納言","平安時代の感性を知る入口になります。"],
  ["俳句の基本的な音数は？","5・7・5","季語が入ることも大切です。"],
  ["奥の細道の作者は？","松尾芭蕉","俳諧紀行文として有名です。"],
  ["竹取物語の主人公は？","かぐや姫","日本最古級の物語とされます。"],
  ["『走れメロス』の作者は？","太宰治","友情と信頼が主題として読まれます。"],
  ["『山月記』の主人公は？","李徴","人間の自尊心や不安を考える作品です。"],
  ["短歌の基本的な音数は？","5・7・5・7・7","和歌の学習にもつながります。"]
];

const literaryQuotes = [
  { text:"吾輩は猫である。名前はまだ無い。", meta:"夏目漱石『吾輩は猫である』" },
  { text:"山路を登りながら、こう考えた。", meta:"夏目漱石『草枕』" },
  { text:"智に働けば角が立つ。", meta:"夏目漱石『草枕』" },
  { text:"親譲りの無鉄砲で小供の時から損ばかりしている。", meta:"夏目漱石『坊っちゃん』" },
  { text:"石炭をば早や積み果てつ。", meta:"森鴎外『舞姫』" },
  { text:"天は人の上に人を造らず。", meta:"福沢諭吉『学問のすすめ』" },
  { text:"まだあげ初めし前髪の。", meta:"島崎藤村『初恋』" },
  { text:"小諸なる古城のほとり。", meta:"島崎藤村『千曲川旅情の歌』" },
  { text:"廻れば大門の見返り柳。", meta:"樋口一葉『たけくらべ』" },
  { text:"或日の暮方の事である。", meta:"芥川龍之介『羅生門』" },
  { text:"メロスは激怒した。", meta:"太宰治『走れメロス』" },
  { text:"春はあけぼの。", meta:"清少納言『枕草子』" },
  { text:"つれづれなるままに。", meta:"吉田兼好『徒然草』" },
  { text:"柿くへば鐘が鳴るなり法隆寺。", meta:"正岡子規 俳句" }
];

const kanji = [
  ["あっとう","圧倒"],
  ["いじ","維持"],
  ["いよく","意欲"],
  ["えんかつ","円滑"],
  ["おうぼ","応募"],
  ["かいしゃく","解釈"],
  ["かくじゅう","拡充"],
  ["かんけつ","簡潔"],
  ["かんよう","寛容"],
  ["きょうちょう","協調"],
  ["けいしょう","継承"],
  ["けんとう","検討"],
  ["こうけん","貢献"],
  ["さくげん","削減"],
  ["しさく","施策"],
  ["しんちょう","慎重"],
  ["すいこう","推敲"],
  ["せいみつ","精密"],
  ["たいしょう","対象"],
  ["たんてき","端的"],
  ["ちゅうしょう","抽象"],
  ["ていあん","提案"],
  ["とうそつ","統率"],
  ["どくそう","独創"],
  ["はあく","把握"],
  ["はんえい","反映"],
  ["ひかく","比較"],
  ["ふきゅう","普及"],
  ["ぶんせき","分析"],
  ["へんかん","変換"],
  ["ほしょう","保障"],
  ["みりょく","魅力"],
  ["ようやく","要約"],
  ["りんり","倫理"],
  ["れいせい","冷静"],
  ["ろんり","論理"],
  ["あいまい","曖昧"],
  ["いだい","偉大"],
  ["いぞん","依存"],
  ["いにん","委任"],
  ["うながす","促す"],
  ["えいきょう","影響"],
  ["えんじょ","援助"],
  ["おんこう","温厚"],
  ["かいかく","改革"],
  ["かいぜん","改善"],
  ["がいねん","概念"],
  ["かくとく","獲得"],
  ["かじょう","過剰"],
  ["かんしょう","鑑賞"],
  ["きかく","企画"],
  ["きけん","危険"],
  ["きそ","基礎"],
  ["きちょう","貴重"],
  ["ぎむ","義務"],
  ["きゅうしゅう","吸収"],
  ["きょひ","拒否"],
  ["きんこう","均衡"],
  ["ぐたいてき","具体的"],
  ["けいぞく","継続"],
  ["けいたい","携帯"],
  ["けつろん","結論"],
  ["けんちょ","顕著"],
  ["こうい","好意"],
  ["こうかん","交換"],
  ["こうりょ","考慮"],
  ["こくふく","克服"],
  ["こんなん","困難"],
  ["さいよう","採用"],
  ["さっかく","錯覚"],
  ["しげん","資源"],
  ["しじ","支持"],
  ["じっせん","実践"],
  ["しぼう","志望"],
  ["しゅうせい","修正"],
  ["じゅよう","需要"],
  ["じょうきょう","状況"],
  ["しょうれい","奨励"],
  ["しょぞく","所属"],
  ["しんけん","真剣"],
  ["すいせん","推薦"],
  ["せいげん","制限"],
  ["せいさく","政策"],
  ["せいぞん","生存"],
  ["せつめい","説明"],
  ["せんたく","選択"],
  ["そうぞう","創造"],
  ["そんざい","存在"],
  ["たいおう","対応"],
  ["たんしょ","短所"],
  ["ちょうさ","調査"],
  ["つうじょう","通常"],
  ["てきかく","的確"],
  ["てきせつ","適切"],
  ["でんとう","伝統"],
  ["とうたつ","到達"],
  ["とくちょう","特徴"],
  ["にんしき","認識"],
  ["はってん","発展"],
  ["はんだん","判断"]
];

const kokugoQuestions = [
  { question:"文章全体を通して筆者が最も伝えたい中心内容は？", answer:"要旨", choices:["要旨","文節","余韻"], note:"要旨は文章全体の中心となる考えです。" },
  { question:"説明文で、筆者が正しいと考えて読者に伝えたい考えは？", answer:"主張", choices:["主張","情景","脚注"], note:"主張は根拠と結びつけて読み取ります。" },
  { question:"筆者の考えを支える事実・例・数値などを何という？", answer:"根拠", choices:["根拠","倒置","季語"], note:"説明文では主張と根拠の対応が大切です。" },
  { question:"論説文で、話題を示し問題提起をするはじめの部分は？", answer:"序論", choices:["序論","本論","結論"], note:"序論、本論、結論の流れを意識しましょう。" },
  { question:"論説文で、具体例や理由を詳しく述べる中心部分は？", answer:"本論", choices:["本論","題名","余白"], note:"本論には根拠や具体例が置かれることが多いです。" },
  { question:"文章の最後で、考えをまとめる部分は？", answer:"結論", choices:["結論","主語","枕詞"], note:"結論は筆者の主張が強く表れる場所です。" },
  { question:"文章を内容のまとまりで区切ったものは？", answer:"段落", choices:["段落","単語","品詞"], note:"段落ごとの役割をつかむと読解しやすくなります。" },
  { question:"『しかし』『だから』『また』のように文と文をつなぐ語は？", answer:"接続語", choices:["接続語","指示語","感動詞"], note:"接続語は前後の関係を示します。" },
  { question:"『これ』『それ』『この』のように前後の内容を指す語は？", answer:"指示語", choices:["指示語","体言","季語"], note:"指示語は何を指すのか確認しましょう。" },
  { question:"文の中で『何が・誰が』にあたる部分は？", answer:"主語", choices:["主語","述語","修飾語"], note:"主語と述語の対応を押さえると文が読みやすくなります。" },
  { question:"文の中で『どうする・どんなだ・何だ』にあたる部分は？", answer:"述語", choices:["述語","主語","接続語"], note:"述語は文の中心になります。" },
  { question:"他の文節を詳しく説明する文節は？", answer:"修飾語", choices:["修飾語","被修飾語","助詞"], note:"修飾語がどの言葉にかかるかを考えます。" },
  { question:"文を意味が不自然にならない程度に区切った単位は？", answer:"文節", choices:["文節","単語","段落"], note:"『ね』を入れて切れるところが文節の目安です。" },
  { question:"言葉として最も小さな意味の単位は？", answer:"単語", choices:["単語","文節","文章"], note:"文節はさらに単語に分けられます。" },
  { question:"それだけで文節を作ることができる単語は？", answer:"自立語", choices:["自立語","付属語","助動詞"], note:"名詞・動詞などは自立語です。" },
  { question:"それだけでは文節を作れず、自立語に付く単語は？", answer:"付属語", choices:["付属語","自立語","副詞"], note:"助詞・助動詞は付属語です。" },
  { question:"人・物・場所・事柄の名前を表す品詞は？", answer:"名詞", choices:["名詞","動詞","副詞"], note:"名詞は体言の中心です。" },
  { question:"動作・存在・状態を表し、活用する品詞は？", answer:"動詞", choices:["動詞","名詞","連体詞"], note:"『読む』『ある』『走る』などが動詞です。" },
  { question:"性質や状態を表し、言い切りが『い』で終わる品詞は？", answer:"形容詞", choices:["形容詞","形容動詞","感動詞"], note:"『美しい』『高い』などが形容詞です。" },
  { question:"性質や状態を表し、言い切りが『だ』で終わる品詞は？", answer:"形容動詞", choices:["形容動詞","形容詞","助詞"], note:"『静かだ』『便利だ』などが形容動詞です。" },
  { question:"主に用言をくわしく説明する品詞は？", answer:"副詞", choices:["副詞","連体詞","名詞"], note:"『とても』『ゆっくり』などが副詞です。" },
  { question:"名詞をくわしく説明し、活用しない品詞は？", answer:"連体詞", choices:["連体詞","副詞","動詞"], note:"『この』『大きな』『ある』などが連体詞です。" },
  { question:"文や語句をつなぐ働きをもつ品詞は？", answer:"接続詞", choices:["接続詞","助詞","形容詞"], note:"接続詞は文脈の流れを作ります。" },
  { question:"感動・呼びかけ・応答を表す品詞は？", answer:"感動詞", choices:["感動詞","助動詞","名詞"], note:"『ああ』『はい』『もしもし』などが感動詞です。" },
  { question:"自立語について関係や意味を添える付属語は？", answer:"助詞", choices:["助詞","助動詞","副詞"], note:"『が』『を』『に』などが助詞です。" },
  { question:"自立語などについて意味を添え、活用する付属語は？", answer:"助動詞", choices:["助動詞","助詞","連体詞"], note:"『れる』『ない』『た』などが助動詞です。" },
  { question:"動詞・形容詞・形容動詞などが形を変えることは？", answer:"活用", choices:["活用","要約","比喩"], note:"用言や助動詞は活用します。" },
  { question:"『ます』『た』などに続くことが多い活用形は？", answer:"連用形", choices:["連用形","終止形","仮定形"], note:"連用形は用言に続く形として大切です。" },
  { question:"文を言い切るときの活用形は？", answer:"終止形", choices:["終止形","未然形","連体形"], note:"辞書に載る形は多くの場合、終止形です。" },
  { question:"名詞のように主語になることができる語の総称は？", answer:"体言", choices:["体言","用言","付属語"], note:"名詞は体言です。" },
  { question:"動詞・形容詞・形容動詞の総称は？", answer:"用言", choices:["用言","体言","助詞"], note:"用言は活用する自立語です。" },
  { question:"相手や話題の人物の動作を高める敬語は？", answer:"尊敬語", choices:["尊敬語","謙譲語","丁寧語"], note:"『いらっしゃる』『おっしゃる』などです。" },
  { question:"自分側の動作を低めて相手を立てる敬語は？", answer:"謙譲語", choices:["謙譲語","尊敬語","丁寧語"], note:"『伺う』『申し上げる』などです。" },
  { question:"『です』『ます』のように、話し方を丁寧にする敬語は？", answer:"丁寧語", choices:["丁寧語","尊敬語","謙譲語"], note:"丁寧語は聞き手への敬意を表します。" },
  { question:"『雪のように白い』のように、はっきりたとえる表現は？", answer:"直喩", choices:["直喩","隠喩","擬人法"], note:"『ようだ』『みたいだ』が目印です。" },
  { question:"『時間は宝だ』のように、たとえを直接言い切る表現は？", answer:"隠喩", choices:["隠喩","直喩","倒置法"], note:"比喩の一種で、暗喩ともいいます。" },
  { question:"人ではないものを人のように表す表現技法は？", answer:"擬人法", choices:["擬人法","反復法","体言止め"], note:"『風がささやく』のような表現です。" },
  { question:"文末を名詞で終えて余韻を残す表現技法は？", answer:"体言止め", choices:["体言止め","倒置法","対句"], note:"短歌や俳句でもよく使われます。" },
  { question:"普通の語順を入れ替えて印象を強める表現技法は？", answer:"倒置法", choices:["倒置法","直喩","押韻"], note:"語順の変化に注目します。" },
  { question:"同じ語句や表現をくり返して印象を強める技法は？", answer:"反復法", choices:["反復法","擬人法","省略法"], note:"詩や文章でリズムを作ることがあります。" },
  { question:"似た形の二つの表現を並べる技法は？", answer:"対句", choices:["対句","枕詞","助詞"], note:"意味や形を対応させて印象を強めます。" },
  { question:"五・七・五を基本とする短い詩は？", answer:"俳句", choices:["俳句","短歌","随筆"], note:"俳句には季語が入るのが基本です。" },
  { question:"俳句で季節を表す語は？", answer:"季語", choices:["季語","主語","枕詞"], note:"春夏秋冬や新年を表す言葉です。" },
  { question:"五・七・五・七・七を基本とする詩は？", answer:"短歌", choices:["短歌","俳句","漢詩"], note:"和歌の形式として重要です。" },
  { question:"和歌で特定の語を導くために置かれる決まった言葉は？", answer:"枕詞", choices:["枕詞","接続語","慣用句"], note:"『あしひきの』などが例です。" },
  { question:"昔の中国の出来事や教えにもとづく言葉は？", answer:"故事成語", choices:["故事成語","同音異義語","擬態語"], note:"『矛盾』『蛇足』などがあります。" },
  { question:"二語以上が結びつき、特別な意味を表す言い回しは？", answer:"慣用句", choices:["慣用句","文節","用言"], note:"『手を焼く』『胸を張る』などです。" },
  { question:"意味が似ている語どうしを何という？", answer:"類義語", choices:["類義語","対義語","多義語"], note:"『美しい』と『きれい』などです。" },
  { question:"意味が反対の語どうしを何という？", answer:"対義語", choices:["対義語","類義語","同義語"], note:"『高い』と『低い』などです。" },
  { question:"同じ読み方で意味や漢字が違う語は？", answer:"同音異義語", choices:["同音異義語","多義語","外来語"], note:"『橋』『箸』『端』などが例です。" },
  { question:"『です・ます』を使った文体は？", answer:"敬体", choices:["敬体","常体","文語"], note:"敬体は読み手に丁寧な印象を与えます。" },
  { question:"『だ・である』を使った文体は？", answer:"常体", choices:["常体","敬体","口語"], note:"説明文や意見文でよく使われます。" },
  { question:"現代の日常会話で使われる言葉づかいは？", answer:"口語", choices:["口語","文語","古語"], note:"現代語の話し言葉・書き言葉を指します。" },
  { question:"古典や昔の文章に見られる古い言葉づかいは？", answer:"文語", choices:["文語","口語","外来語"], note:"古文を読むときに必要な見方です。" },
  { question:"小説や物語など、人の心情や出来事を描く文章は？", answer:"文学的文章", choices:["文学的文章","説明的文章","実用文"], note:"登場人物・場面・心情を読み取ります。" },
  { question:"事実や考えを筋道立てて説明する文章は？", answer:"説明的文章", choices:["説明的文章","文学的文章","会話文"], note:"主張・根拠・構成に注目します。" },
  { question:"物語で出来事が起こる時間・場所・状況は？", answer:"場面", choices:["場面","主張","品詞"], note:"場面の変化は心情の変化にも関わります。" },
  { question:"登場人物の気持ちや考えを何という？", answer:"心情", choices:["心情","文節","根拠"], note:"行動や会話、情景から読み取ります。" },
  { question:"人物の動きやふるまいを描く表現は？", answer:"行動描写", choices:["行動描写","情景描写","引用"], note:"行動から性格や心情が分かることがあります。" },
  { question:"景色や周囲の様子を描く表現は？", answer:"情景描写", choices:["情景描写","行動描写","反語"], note:"情景描写は心情を暗示することがあります。" },
  { question:"後の展開につながる手がかりを何という？", answer:"伏線", choices:["伏線","結論","助詞"], note:"物語の展開を予想するヒントになります。" },
  { question:"物語で最も盛り上がる場面は？", answer:"山場", choices:["山場","序論","注釈"], note:"クライマックスとも呼ばれます。" },
  { question:"作品を通して作者が読者に考えさせたい中心内容は？", answer:"主題", choices:["主題","主語","季語"], note:"物語全体を読み終えて考えます。" },
  { question:"物語を読者に語っている存在は？", answer:"語り手", choices:["語り手","筆者","助動詞"], note:"語り手と作者は同じとは限りません。" },
  { question:"『私』が語るような視点は？", answer:"一人称視点", choices:["一人称視点","三人称視点","客観描写"], note:"語り手の知っている範囲で語られます。" },
  { question:"人物を外側から語るような視点は？", answer:"三人称視点", choices:["三人称視点","一人称視点","敬体"], note:"複数の人物や場面を描きやすい視点です。" },
  { question:"かぎかっこで示される人物の発言部分は？", answer:"会話文", choices:["会話文","地の文","注釈"], note:"会話文は性格や関係を表します。" },
  { question:"会話以外の説明や描写の部分は？", answer:"地の文", choices:["地の文","会話文","引用文"], note:"場面や行動、心情が語られます。" },
  { question:"文章の考えがどの順番で進むかを何という？", answer:"論理展開", choices:["論理展開","音読み","季節感"], note:"接続語に注目すると追いやすくなります。" },
  { question:"考えを分かりやすくするために示す実例は？", answer:"具体例", choices:["具体例","抽象","反語"], note:"『たとえば』の後に出やすいです。" },
  { question:"具体的なものから共通点を取り出した考えは？", answer:"抽象", choices:["抽象","具体例","擬声語"], note:"抽象と具体の関係を押さえましょう。" },
  { question:"実際に起こったことや確かめられる内容は？", answer:"事実", choices:["事実","意見","比喩"], note:"意見と区別することが大切です。" },
  { question:"ある事柄についての考えや判断は？", answer:"意見", choices:["意見","事実","文節"], note:"『〜と思う』『〜べきだ』などに注目します。" },
  { question:"二つ以上のものを比べることは？", answer:"比較", choices:["比較","引用","活用"], note:"共通点や相違点を整理します。" },
  { question:"二つの違いをはっきりさせて示すことは？", answer:"対比", choices:["対比","要約","敬語"], note:"『一方』などの接続語が手がかりです。" },
  { question:"原因と結果のつながりを何という？", answer:"因果関係", choices:["因果関係","並立関係","主述関係"], note:"『なぜなら』『そのため』に注目します。" },
  { question:"文章のはじめに問いを示すことは？", answer:"問題提起", choices:["問題提起","反復法","体言止め"], note:"読者に考える観点を示します。" },
  { question:"相手の意見に対して別の考えを述べることは？", answer:"反論", choices:["反論","引用","描写"], note:"意見文では反論への対応も大切です。" },
  { question:"大切な内容を短くまとめることは？", answer:"要約", choices:["要約","倒置","押韻"], note:"中心文やキーワードを残します。" },
  { question:"他の文章や人の言葉を取り上げて使うことは？", answer:"引用", choices:["引用","主語","比喩"], note:"出典を明らかにすることが大切です。" },
  { question:"漢字の中国語由来の読み方を何という？", answer:"音読み", choices:["音読み","訓読み","熟字訓"], note:"熟語で使われることが多い読みです。" },
  { question:"漢字に日本語の意味を当てた読み方は？", answer:"訓読み", choices:["訓読み","音読み","重箱読み"], note:"一字で意味が分かりやすい読みです。" },
  { question:"二字以上の漢字が結びついた語は？", answer:"熟語", choices:["熟語","助詞","和語"], note:"漢字どうしの関係にも注目します。" },
  { question:"四つの漢字でできた熟語は？", answer:"四字熟語", choices:["四字熟語","故事成語","慣用句"], note:"『一石二鳥』『温故知新』などがあります。" },
  { question:"外国語から取り入れられた語は？", answer:"外来語", choices:["外来語","和語","漢語"], note:"多くはカタカナで表されます。" },
  { question:"もともと日本で使われてきた語は？", answer:"和語", choices:["和語","漢語","外来語"], note:"やわらかい印象をもつことがあります。" },
  { question:"中国から入った漢字音にもとづく語は？", answer:"漢語", choices:["漢語","和語","擬態語"], note:"熟語に多く見られます。" },
  { question:"二字以上の漢字に特別な読みを当てたものは？", answer:"熟字訓", choices:["熟字訓","音読み","湯桶読み"], note:"『今日（きょう）』『大人（おとな）』などです。" },
  { question:"上が音読み、下が訓読みの熟語の読み方は？", answer:"重箱読み", choices:["重箱読み","湯桶読み","熟字訓"], note:"『重箱』自体が例です。" },
  { question:"上が訓読み、下が音読みの熟語の読み方は？", answer:"湯桶読み", choices:["湯桶読み","重箱読み","音読み"], note:"『湯桶』自体が例です。" },
  { question:"実際の音や声をまねた語は？", answer:"擬声語", choices:["擬声語","擬態語","外来語"], note:"『ざあざあ』『わんわん』などです。" },
  { question:"様子や状態を音のように表す語は？", answer:"擬態語", choices:["擬態語","擬声語","漢語"], note:"『きらきら』『しんみり』などです。" },
  { question:"言葉を省いて余韻を残す表現技法は？", answer:"省略法", choices:["省略法","反語","対句"], note:"読者に想像させる効果があります。" },
  { question:"疑問の形で、強い断定や反対の意味を表す技法は？", answer:"反語", choices:["反語","引用","比喩"], note:"『〜だろうか、いや〜ない』の形が目印です。" },
  { question:"同じ音や似た音を響かせる技法は？", answer:"押韻", choices:["押韻","切れ字","枕詞"], note:"詩のリズムを作ることがあります。" },
  { question:"短歌や俳句で決まった音数より多いことは？", answer:"字余り", choices:["字余り","字足らず","季語"], note:"表現上の効果として使われます。" },
  { question:"短歌や俳句で決まった音数より少ないことは？", answer:"字足らず", choices:["字足らず","字余り","対句"], note:"音数の変化に注意しましょう。" },
  { question:"俳句で意味や調子を切る働きをする語は？", answer:"切れ字", choices:["切れ字","枕詞","助詞"], note:"『や』『かな』『けり』などが代表です。" },
  { question:"古文で『ぞ・なむ・や・か』などに呼応して文末が変わる決まりは？", answer:"係り結び", choices:["係り結び","体言止め","重箱読み"], note:"古典文法の重要事項です。" },
  { question:"他の文節と直接関係せず、呼びかけなどになる文節は？", answer:"独立語", choices:["独立語","修飾語","述語"], note:"『先生、質問があります』の『先生』などです。" }
];

const kobunWords = [
  { question:"『いと』の意味は？", answer:"とても", choices:["とても","少し","すぐに"], note:"強調を表す重要語です。" },
  { question:"『をかし』の意味は？", answer:"趣がある", choices:["趣がある","悲しい","眠い"], note:"明るい感動やおもしろさを表すことが多い語です。" },
  { question:"『あはれ』の意味は？", answer:"しみじみとした趣", choices:["しみじみとした趣","速い","正しい"], note:"深い感動や情趣を表します。" },
  { question:"『ありがたし』の意味は？", answer:"めったにない", choices:["めったにない","ありがとう","簡単だ"], note:"現代語とは意味がずれるので注意しましょう。" },
  { question:"『あやし』の意味は？", answer:"不思議だ", choices:["不思議だ","美しい","騒がしい"], note:"身分が低い、粗末だ、という意味もあります。" },
  { question:"『おどろく』の古文での意味は？", answer:"目を覚ます", choices:["目を覚ます","感動する","走る"], note:"現代語の『びっくりする』だけで考えないようにしましょう。" },
  { question:"『つとめて』の意味は？", answer:"早朝", choices:["早朝","夕方","昼すぎ"], note:"『冬はつとめて』でよく学ぶ語です。" },
  { question:"『ののしる』の古文での意味は？", answer:"大声で騒ぐ", choices:["大声で騒ぐ","悪口を言う","静かに歩く"], note:"現代語の意味だけで判断しない語です。" },
  { question:"『めでたし』の意味は？", answer:"すばらしい", choices:["すばらしい","珍しい","つらい"], note:"ほめたたえる気持ちを表します。" },
  { question:"『うつくし』の古文での意味は？", answer:"かわいらしい", choices:["かわいらしい","美しい","恐ろしい"], note:"現代語の『美しい』とはずれることがあります。" },
  { question:"『いみじ』の意味は？", answer:"たいそう", choices:["たいそう","少しも","たぶん"], note:"よい意味にも悪い意味にも強調として使われます。" },
  { question:"『やうやう』の意味は？", answer:"だんだん", choices:["だんだん","いきなり","まったく"], note:"現代仮名遣いでは『ようよう』と読みます。" },
  { question:"『さらなり』の意味は？", answer:"言うまでもない", choices:["言うまでもない","新しい","さらに悪い"], note:"『言う必要もないほど当然だ』という意味です。" },
  { question:"『なほ』の意味は？", answer:"やはり", choices:["やはり","すぐに","なぜ"], note:"現代仮名遣いでは『なお』です。" },
  { question:"『え』が打消と結びつくときの意味は？", answer:"できない", choices:["できない","必ずする","もう一度"], note:"『え〜ず』で不可能を表します。" },
  { question:"『あまた』の意味は？", answer:"たくさん", choices:["たくさん","わずか","昨日"], note:"数や量が多いことを表します。" },
  { question:"『おぼゆ』の意味は？", answer:"思われる", choices:["思われる","覚える","泳ぐ"], note:"自然にそう感じられる、という意味です。" },
  { question:"『ながむ』の古文での意味は？", answer:"物思いに沈む", choices:["物思いに沈む","遠くを見る","歌う"], note:"『眺める』だけでなく心情を表す語です。" },
  { question:"『わろし』の意味は？", answer:"よくない", choices:["よくない","かわいい","明るい"], note:"強い悪さより『よくない』くらいの意味です。" },
  { question:"『よろし』の意味は？", answer:"悪くはない", choices:["悪くはない","とても悪い","若い"], note:"現代語の『よろしい』より控えめです。" },
  { question:"『あさまし』の意味は？", answer:"驚きあきれる", choices:["驚きあきれる","朝が早い","楽しい"], note:"意外さに驚く気持ちを表します。" },
  { question:"『おぼつかなし』の意味は？", answer:"気がかりだ", choices:["気がかりだ","確かだ","明るい"], note:"はっきりしない、不安だという意味もあります。" },
  { question:"『かたじけなし』の意味は？", answer:"ありがたい", choices:["ありがたい","かたい","悲しい"], note:"恐れ多い、もったいないという気持ちを含みます。" },
  { question:"『こころもとなし』の意味は？", answer:"待ち遠しい", choices:["待ち遠しい","心が強い","満足だ"], note:"不安だ、じれったいという意味でも使われます。" },
  { question:"『すさまじ』の意味は？", answer:"興ざめだ", choices:["興ざめだ","すばらしい","細かい"], note:"現代語の『すさまじい』とは意味が違います。" },
  { question:"『まめなり』の意味は？", answer:"まじめだ", choices:["まじめだ","小さい","丸い"], note:"誠実である、実用的であるという意味です。" },
  { question:"『ゆかし』の意味は？", answer:"見たい・知りたい", choices:["見たい・知りたい","床が高い","ゆっくりだ"], note:"心が引かれて知りたい気持ちを表します。" },
  { question:"『めづらし』の意味は？", answer:"すばらしい", choices:["すばらしい","目が痛い","退屈だ"], note:"珍しいだけでなく、すばらしい意味でも使います。" },
  { question:"『いとほし』の意味は？", answer:"かわいそうだ", choices:["かわいそうだ","とても欲しい","美しい"], note:"気の毒だ、いとしいという意味があります。" },
  { question:"『あいなし』の意味は？", answer:"つまらない", choices:["つまらない","愛がある","色がない"], note:"おもしろくない、気に入らないという意味です。" },
  { question:"『むげなり』の意味は？", answer:"ひどい", choices:["ひどい","無限だ","静かだ"], note:"程度がひどい、まったくそうだという意味です。" },
  { question:"『おろかなり』の古文での意味は？", answer:"いいかげんだ", choices:["いいかげんだ","頭が悪い","おもしろい"], note:"現代語の『愚か』だけで考えないようにします。" },
  { question:"『ことわり』の意味は？", answer:"道理", choices:["道理","断り","小鳥"], note:"物事の筋道や理由を表します。" },
  { question:"『ふみ』の意味は？", answer:"手紙", choices:["手紙","足あと","二つ"], note:"文章や書物を表すこともあります。" },
  { question:"『やむごとなし』の意味は？", answer:"高貴だ", choices:["高貴だ","病気だ","終わらない"], note:"身分が高い、大切だという意味です。" },
  { question:"『かしこし』の意味は？", answer:"恐れ多い", choices:["恐れ多い","賢いだけ","かたい"], note:"すばらしい、尊いという意味もあります。" },
  { question:"『かなし』の古文での意味は？", answer:"いとしい", choices:["いとしい","悲しい","静かだ"], note:"古文では『かわいい、いとしい』の意味が重要です。" },
  { question:"『はづかし』の古文での意味は？", answer:"立派だ", choices:["立派だ","恥ずかしい","速い"], note:"相手が立派でこちらが気後れする感じです。" },
  { question:"『つれづれなり』の意味は？", answer:"退屈だ", choices:["退屈だ","連れている","冷たい"], note:"することがなく所在ない様子です。" },
  { question:"『あだなり』の意味は？", answer:"はかない", choices:["はかない","正確だ","温かい"], note:"不誠実だ、浮気だという意味もあります。" },
  { question:"『あからさまなり』の意味は？", answer:"ほんの少し", choices:["ほんの少し","明るい","明らかだ"], note:"現代語の『あからさま』とは意味が違います。" },
  { question:"『おもしろし』の古文での意味は？", answer:"趣深い", choices:["趣深い","笑える","重い"], note:"景色などが心をひきつける様子です。" },
  { question:"『うし』の意味は？", answer:"つらい", choices:["つらい","牛","軽い"], note:"いやだ、つらいという気持ちを表します。" },
  { question:"『かたし』の意味は？", answer:"難しい", choices:["難しい","硬いだけ","片方だ"], note:"『ありがたし』などにもつながる感覚です。" },
  { question:"『あながちなり』の意味は？", answer:"強引だ", choices:["強引だ","穴が多い","上品だ"], note:"むやみだ、無理にという意味もあります。" },
  { question:"『さうざうし』の意味は？", answer:"物足りない", choices:["物足りない","騒がしい","涼しい"], note:"現代仮名遣いでは『そうぞうし』と読みます。" },
  { question:"『ねんごろなり』の意味は？", answer:"熱心だ", choices:["熱心だ","眠そうだ","年上だ"], note:"丁寧だ、親しいという意味もあります。" },
  { question:"『つきづきし』の意味は？", answer:"ふさわしい", choices:["ふさわしい","月が多い","次々だ"], note:"似つかわしい、調和しているという意味です。" },
  { question:"『やさし』の古文での意味は？", answer:"上品だ", choices:["上品だ","簡単だ","やわらかい"], note:"優美だ、けなげだという意味もあります。" },
  { question:"『らうたし』の意味は？", answer:"かわいい", choices:["かわいい","乱暴だ","大きい"], note:"愛らしく守ってやりたい感じを表します。" },
  { question:"『めやすし』の意味は？", answer:"見苦しくない", choices:["見苦しくない","目が安い","眠い"], note:"感じがよい、無難だという意味です。" },
  { question:"『びんなし』の意味は？", answer:"都合が悪い", choices:["都合が悪い","便りがない","美しい"], note:"具合が悪い、困ったことだという意味です。" },
  { question:"『うたてし』の意味は？", answer:"いやだ", choices:["いやだ","歌いたい","疑わしい"], note:"不快だ、情けないという気持ちを表します。" },
  { question:"『あてなり』の意味は？", answer:"高貴だ", choices:["高貴だ","あてになる","荒い"], note:"身分や雰囲気が上品であることを表します。" },
  { question:"『しるし』の意味は？", answer:"はっきりしている", choices:["はっきりしている","印だけ","静かだ"], note:"明白だ、効果があるという意味です。" },
  { question:"『つれなし』の意味は？", answer:"平然としている", choices:["平然としている","連れがない","悲しい"], note:"そしらぬ顔をしている様子です。" },
  { question:"『わびし』の意味は？", answer:"つらく心細い", choices:["つらく心細い","楽しい","わびている"], note:"寂しい、困っている感じを表します。" },
  { question:"『しのぶ』の意味は？", answer:"我慢する", choices:["我慢する","忍者になる","調べる"], note:"隠す、こらえるという意味もあります。" },
  { question:"『あやなし』の意味は？", answer:"筋が通らない", choices:["筋が通らない","模様がない","美しい"], note:"わけが分からない、つまらないという意味です。" },
  { question:"『かづく』の意味は？", answer:"かぶる", choices:["かぶる","数える","近づく"], note:"褒美をいただく意味で使うこともあります。" },
  { question:"『たまふ』の意味は？", answer:"お与えになる", choices:["お与えになる","食べる","走る"], note:"尊敬の補助動詞としても重要です。" },
  { question:"『おはす』の意味は？", answer:"いらっしゃる", choices:["いらっしゃる","押す","終わる"], note:"『あり・をり・行く・来』の尊敬語です。" },
  { question:"『侍り』の意味は？", answer:"ございます", choices:["ございます","はべるだけ","怒る"], note:"丁寧語として使われます。" },
  { question:"『まかる』の意味は？", answer:"退出する", choices:["退出する","任せる","曲がる"], note:"『行く』の謙譲語としても使われます。" },
  { question:"『申す』の古文での意味は？", answer:"申し上げる", choices:["申し上げる","申し込む","持つ"], note:"『言ふ』の謙譲語です。" },
  { question:"『のたまふ』の意味は？", answer:"おっしゃる", choices:["おっしゃる","飲み込む","黙る"], note:"『言ふ』の尊敬語です。" },
  { question:"『きこゆ』の意味は？", answer:"申し上げる", choices:["申し上げる","聞こえるだけ","切る"], note:"謙譲語として覚えると役立ちます。" },
  { question:"『参る』の古文での意味は？", answer:"参上する", choices:["参上する","困る","数える"], note:"『行く・来』の謙譲語です。" },
  { question:"『奉る』の意味は？", answer:"差し上げる", choices:["差し上げる","祭るだけ","倒れる"], note:"謙譲語としてよく出ます。" },
  { question:"『いぬ』の意味は？", answer:"去る", choices:["去る","犬","眠る"], note:"現代語の『犬』と混同しないようにしましょう。" },
  { question:"『まうづ』の意味は？", answer:"参上する", choices:["参上する","もう一度する","待つ"], note:"『まいる』に近い謙譲語です。" },
  { question:"『ぐす』の意味は？", answer:"連れて行く", choices:["連れて行く","愚かだ","壊す"], note:"連れる、伴うという意味です。" },
  { question:"『ありく』の意味は？", answer:"動き回る", choices:["動き回る","歩くだけ","有名だ"], note:"あちこち移動する意味があります。" },
  { question:"『あく』の意味は？", answer:"満足する", choices:["満足する","開く","飽きるだけ"], note:"十分だ、満ち足りるという意味です。" },
  { question:"『うつろふ』の意味は？", answer:"色あせる", choices:["色あせる","移動するだけ","写す"], note:"心変わりする意味もあります。" },
  { question:"『かきくらす』の意味は？", answer:"悲しみに暮れる", choices:["悲しみに暮れる","書き散らす","暗くするだけ"], note:"涙などで心が暗くなる様子です。" },
  { question:"『おきつ』の意味は？", answer:"命令する", choices:["命令する","起きるだけ","置く"], note:"取り計らう、指図する意味があります。" },
  { question:"『かしづく』の意味は？", answer:"大切に世話する", choices:["大切に世話する","かしこまる","築く"], note:"身分の高い人を大事に世話することです。" },
  { question:"『すずろなり』の意味は？", answer:"むやみだ", choices:["むやみだ","涼しい","静かだ"], note:"なんとなく、思いがけないという意味もあります。" },
  { question:"『せちなり』の意味は？", answer:"切実だ", choices:["切実だ","親切だ","狭い"], note:"非常に強い様子を表します。" },
  { question:"『なかなかなり』の意味は？", answer:"中途半端だ", choices:["中途半端だ","かなり良い","仲が良い"], note:"かえって、むしろという意味もあります。" },
  { question:"『やがて』の古文での意味は？", answer:"そのまま", choices:["そのまま","やがてそのうち","急に"], note:"すぐに、という意味でも使われます。" },
  { question:"『かく』の意味は？", answer:"このように", choices:["このように","書く","隠れる"], note:"指示語として覚えましょう。" },
  { question:"『さ』の意味は？", answer:"そう", choices:["そう","差","左"], note:"前の内容を受ける指示語です。" },
  { question:"『しか』の意味は？", answer:"そのように", choices:["そのように","鹿","しかし"], note:"『かく・さ・しか』はセットで覚えます。" },
  { question:"『いかで』の意味は？", answer:"どうして", choices:["どうして","いかにも","怒って"], note:"願望と結びつくと『なんとかして』にもなります。" },
  { question:"『いかが』の意味は？", answer:"どのように", choices:["どのように","いかがわしい","少し"], note:"疑問や反語でよく使われます。" },
  { question:"『など』の古文での意味は？", answer:"どうして", choices:["どうして","などなど","何度も"], note:"疑問・反語を表すことがあります。" },
  { question:"『いつしか』の意味は？", answer:"早く", choices:["早く","いつの間にか","いつか"], note:"待ち望む気持ちがこもります。" },
  { question:"『さながら』の意味は？", answer:"そのまま", choices:["そのまま","全部","さすが"], note:"すべて、まるで、という意味もあります。" },
  { question:"『ただ』の意味は？", answer:"ただもう", choices:["ただもう","無料","正しい"], note:"ひたすら、ちょうど、という意味もあります。" },
  { question:"『とく』の意味は？", answer:"早く", choices:["早く","解く","得をする"], note:"現代語の『とくに』とは違います。" },
  { question:"『ゆめ』の意味は？", answer:"決して", choices:["決して","夢","少し"], note:"下に禁止や打消を伴いやすい副詞です。" },
  { question:"『よも』の意味は？", answer:"まさか", choices:["まさか","夜も","四方"], note:"下に打消推量を伴うことが多い語です。" },
  { question:"『さらに』の古文での意味は？", answer:"まったく", choices:["まったく","さらに追加","新しく"], note:"打消と結びつくと『まったく〜ない』です。" },
  { question:"『たえて』の意味は？", answer:"まったく", choices:["まったく","耐えて","だんだん"], note:"打消と結びついて強い否定を表します。" },
  { question:"『つゆ』の意味は？", answer:"少しも", choices:["少しも","梅雨","露だけ"], note:"打消と結びつきやすい副詞です。" },
  { question:"『なべて』の意味は？", answer:"すべて", choices:["すべて","鍋で","並べて"], note:"一般に、総じてという意味です。" },
  { question:"『かねて』の意味は？", answer:"前から", choices:["前から","兼ねている","金で"], note:"以前から、あらかじめという意味です。" },
  { question:"『おのづから』の意味は？", answer:"自然に", choices:["自然に","自分からだけ","おのを使って"], note:"ひとりでに、偶然にという意味です。" }
];

let kanjiIndex = 0;
let kokugoIndex = 0;
let kobunIndex = 0;
let quoteIndex = -1;

function shuffle(items){
  return [...items].sort(() => Math.random() - 0.5);
}

function pickDaily(){
  const dq = dailyQ[Math.floor(Math.random() * dailyQ.length)];
  const dailyQuestion = document.getElementById("dailyQuestion");
  dailyQuestion.innerHTML =
    `<span>${dq[0]}</span>
     <button type="button" class="dailyAnswerButton" id="dailyAnswerButton">答えを見る</button>
     <span class="answerLine" id="dailyAnswer" hidden>答え：${dq[1]}</span>
     <small class="dailyHint">${dq[2]}</small>`;

  document.getElementById("dailyAnswerButton").addEventListener("click", () => {
    document.getElementById("dailyAnswer").hidden = false;
  });
}

function renderMonthNames(){
  const monthList = document.getElementById("monthNameList");
  monthList.innerHTML = oldMonthNames.map(([name, reading, month, desc]) =>
    `<div class="monthName"><strong>${name}<small>（${reading}）</small></strong><span>${month}：${desc}</span></div>`
  ).join("");
}

function showQuote(){
  quoteIndex = (quoteIndex + 1 + Math.floor(Math.random() * (literaryQuotes.length - 1))) % literaryQuotes.length;
  const quote = literaryQuotes[quoteIndex];
  document.getElementById("quoteBox").innerHTML =
    `<p class="quoteText">${quote.text}</p><p class="quoteMeta">${quote.meta}</p>`;
}

function markChoices(container, answer, selected){
  container.querySelectorAll(".choice").forEach(choice => {
    choice.disabled = true;
    choice.classList.toggle("correct", choice.textContent === answer);
    choice.classList.toggle("wrong", choice.textContent === selected && selected !== answer);
  });
}

function renderChoices(containerId, choices, answer, resultId, note){
  const container = document.getElementById(containerId);
  const result = document.getElementById(resultId);
  result.textContent = "";
  container.innerHTML = "";

  shuffle(choices).forEach(choiceText => {
    const choice = document.createElement("button");
    choice.type = "button";
    choice.className = "choice";
    choice.textContent = choiceText;
    choice.addEventListener("click", () => {
      markChoices(container, answer, choiceText);
      result.textContent = choiceText === answer
        ? `正解です。${note}`
        : `正解は「${answer}」です。${note}`;
    });
    container.appendChild(choice);
  });
}

function showKanji(){
  const item = kanji[kanjiIndex];
  document.getElementById("kanjiQuestion").textContent =
    `第${kanjiIndex + 1}問 / 全${kanji.length}問　「${item[0]}」を漢字で書くと？`;

  const choices = [item[1]];
  while(choices.length < 4){
    const r = kanji[Math.floor(Math.random() * kanji.length)][1];
    if(!choices.includes(r)) choices.push(r);
  }
  renderChoices("kanjiChoices", choices, item[1], "kanjiResult", "高校入試では語句の意味も一緒に確認しましょう。");
}

function nextKanji(){
  kanjiIndex = (kanjiIndex + 1) % kanji.length;
  showKanji();
}

function showQuestion(){
  const item = kokugoQuestions[kokugoIndex];
  document.getElementById("quiz").textContent =
    `第${kokugoIndex + 1}問 / 全${kokugoQuestions.length}問　${item.question}`;
  renderChoices("choices", item.choices, item.answer, "result", item.note);
}

function nextQuestion(){
  kokugoIndex = (kokugoIndex + 1) % kokugoQuestions.length;
  showQuestion();
}

function showKobun(){
  const item = kobunWords[kobunIndex];
  document.getElementById("kobunQ").textContent =
    `第${kobunIndex + 1}問 / 全${kobunWords.length}問　${item.question}`;
  renderChoices("kobunChoices", item.choices, item.answer, "kobunResult", item.note);
}

function nextKobun(){
  kobunIndex = (kobunIndex + 1) % kobunWords.length;
  showKobun();
}

function createPetals(){
  const petals = document.getElementById("petals");
  for(let i = 0; i < 28; i++){
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${9 + Math.random() * 11}s`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    petal.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    petals.appendChild(petal);
  }
}

function createFloatingObjects(){
  const field = document.getElementById("floatingObjects");
  for(let i = 0; i < 7; i++){
    const object = document.createElement("span");
    object.className = "floatObject";
    object.style.top = `${8 + Math.random() * 74}%`;
    object.style.left = `${-30 - Math.random() * 60}%`;
    object.style.animationDuration = `${24 + Math.random() * 18}s`;
    object.style.animationDelay = `${Math.random() * 16}s`;
    object.style.transform = `scale(${0.7 + Math.random() * 0.65})`;
    field.appendChild(object);
  }
}

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:.14});

document.querySelectorAll(".fade").forEach(el => fadeObserver.observe(el));
document.getElementById("quoteButton").addEventListener("click", showQuote);

pickDaily();
renderMonthNames();
showQuote();
showKanji();
showQuestion();
showKobun();
createPetals();
createFloatingObjects();
