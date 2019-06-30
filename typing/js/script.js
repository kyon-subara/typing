document.onkeydown = typeGame;

// 文字を格納する配列
var moji = ["Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ",
           "Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ",
           "Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ"," ","189"];

var moji_s = ["a","b","c","d","e","f","g","h","i",
              "j","k","l","m","n","o","p","q","r",
              "s","t","u","v","w","x","y","z"," ","-"];

// キーコードを格納する配列
var kcode = new Array(65,66,67,68,69,70,71,72,73,
                      74,75,76,77,78,79,80,81,82,
                      83,84,85,86,87,88,89,90,32,189);

// 問題と文字列を対応するための配列
var rnd = new Array();
// 時間変数
var sec,msec,timer;
var miss_string,success;
// グローバル変数
var mondai      = ""; // 問題の文字列を格納

var input       = ""; // 打ち込み内容

var random;	      // 乱数を格納
var quested   = []; // 既出の問題番号を格納
var mondaisu  = 10; // 問題数

var description = ""; // 説明文の内容
var mondaiCount = ""; // 問題の文字列を格納
var missType    = 0;  // 入力ミスの回数
var cnt = 0;          // 入力数
var ans = 0;          // 回答数
var typStart,typEnd;  // 開始と終了の時刻を格納
var successType;

// タイプ速度、正打率
var typeRate;
var successRate;
var score;

if( mode == 'e' ){
// 簡単な問題
var dat = [
    {"c_description": "高専", "c_word": "kosen"},
    {"c_description": "味噌汁", "c_word": "misosiru"},
    {"c_description": "定食", "c_word": "teisyoku"},
    {"c_description": "蒟蒻", "c_word": "konnyaku"},
    {"c_description": "オムライス", "c_word": "omuraisu"},
    {"c_description": "オーバーウォッチ", "c_word": "overwatch"},
    {"c_description": "肉", "c_word": "meat"},
    {"c_description": "寿司", "c_word": "sushi"},
    {"c_description": "筑後川", "c_word": "tikugogawa"},
    {"c_description": "八女茶", "c_word": "yametya"},
    {"c_description": "電気回路", "c_word": "denkikairo"},
    {"c_description": "情報理論", "c_word": "jouhouriron"}
];
}else if( mode == 'h' ){
// 難しい問題
var dat = [
    {"c_description": "まだまだまだまだ遊び足りない", "c_word": "madamadamadamadaasobitarinai"},
    {"c_description": "帰りたくない beat", "c_word": "kaeritakunai beat"},
    {"c_description": "帰りたくない midnight", "c_word": "kaeritakunai midnight"},
    {"c_description": "つまらない beat はやめて", "c_word": "tumaranai beat hayamete"},
    {"c_description": "フレデリズムツアー新木場studio coast final", "c_word": "furederizumutua-sinkibastudio coast final"},
    {"c_description": "そのワンマンこそがonly oneなんだ", "c_word": "sonowanmankosoga only one nanda"},
    {"c_description": "そこに君がいないとかナンセンス", "c_word": "sokonikimigainaitokanansensu"},
    {"c_description": "脳天ぶち抜くdistortion欲して", "c_word": "noutenbutinuku distortion hossite"},
    {"c_description": "ちたにけらは とほらすての はてきらとな りはしてと", "c_word": "titanikeraha tohorasuteno hatekiratona rihasiteto"},
    {"c_description": "上上下下左右左右同時押し青春", "c_word": "ueuesitasitahidarimigihidarimigidoujiosiseisyun"},
    {"c_description": "迷いのない強い人だねって", "c_word": "mayoinonaituyoihitodanette"},
    {"c_description": "開いた口がふさがりません", "c_word": "aitakutigafusagarimasen"}
];
}

// 問題の文字列をキーボード番号に対応させる
function key_respond(mondai)
{
  for ( var i = 0 ; i < mondai.length ; i++ ){
    // i番目の文字列を探す
    var serch = mondai.charAt(i);
    // i番目にある文字列の番号を探す
    rnd[i] = moji.indexOf(serch);
    if( rnd[i] < 0 ){
      rnd[i] = moji_s.indexOf(serch);
    }
  }
}

// 問題をセットする関数
function gameSet()
{
  cnt = 0;

  do{
     random = Math.floor( Math.random() * dat.length );
  }while( quested.includes(random) == true );

  // 既出の問題番号を配列に格納
  quested.push(random);

  mondai = dat[random]['c_word'];
  description = dat[random]['c_description'];

  random = Math.random() * dat.length;

  mondaiCount = mondai.length;
  // 乱数作成関数の呼び出し
  key_respond(mondai);

  // 問題枠に表示する
  document.getElementById("description").innerHTML = description;
  document.getElementById("mondai").innerHTML = mondai;
  document.getElementById("input").innerHTML = "";
  document.getElementById("missType").innerHTML = '合計ミスタイプ:'+missType+'回';
}

// キーを受け取る関数
function typeGame(evt)
{
  var kc; // 入力されたキーコードを格納する変数
  // 入力されたキーのキーコードを取得
  if( document.all ){
    kc = event.keyCode;
  }else{
    kc = evt.which;
  }

  if(kc != kcode[ rnd[cnt] ]　&& ans < mondaisu){ // ミスタイプを数える
    missType++;
    document.getElementById("missType").innerHTML = '合計ミスタイプ:'+missType+'回';
  }

  // 入力されたキーコードと、問題文のキーコードを比較
  if( kc == kcode[ rnd[cnt] ] && ans != mondaisu ){
    if( cnt == 0 && ans == 0 ){
      typStart = new Date();
      successType = 0;
    }
    cnt ++; // 入力数をカウント
    if( cnt < mondaiCount ){

    input = mondai.substring(0,cnt);

    document.getElementById("description").innerHTML = description;
    document.getElementById("mondai").innerHTML = mondai;
    document.getElementById("input").innerHTML = input;

    }else{ // 全文字入力した場合
        ans++;
        successType = successType + cnt;
        if( ans == mondaisu ){
          // 終了時間を記録する
          typEnd = new Date();
          // 経過時間を取得する
          var keika = typEnd - typStart;
          // 1000で割って切り捨て、秒数を取得
          var sec = Math.floor( keika/1000 );
          // 1000で割った[余り(%で取得できる)]でミリ秒を取得
          msec = keika % 1000;
          // 正打数を経過時間(秒)で割ってタイプ速度を取得
          typeRate = Math.floor(successType / (keika/1000) * 100) / 100;
          // 正打率を小数第2桁まで取得
          successRate = Math.floor(successType / (successType + missType)*10000) / 100;
          // スコアを取得
          score = Math.floor(typeRate * successRate);
          gameFinish();
        }else{
          gameSet();
        }
      }
  }
  // space入力時のスクロールを防ぐ
  if( kc == 32 ){
    return false;
  }
}


function gameFinish(){
  // タイマー終了
  clearTimeout(timer);

  document.getElementById("description").innerHTML = '終了';
  document.getElementById("mondai").innerHTML = 'スコア: ' + score ;
  document.getElementById("input").innerHTML =  'タイプ速度: ' + typeRate + '文字/秒';
  document.getElementById("missType").innerHTML = '正打率: ' + successRate + '%';

}

function resetGame(){
  missType  = 0;
  cnt       = 0;
  ans       = 0;
  quested   = [];
  gameSet();
}
