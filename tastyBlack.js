
//透明度を変化させる
let header = document.getElementById("header");
let isPositive = true;
let opacity = 0; // 不透明度

function opacityAnimate() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
 }

   header.style.opacity = opacity;
}
// 300ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacityAnimate, 300);


//回答欄とその下部分
'use strict';
const answerInput = document.getElementById('answer');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = ( ) => {
const answer = answerInput.value;

   if(answer.length===0) { //空欄の時は処理を終了
        return;
   };
    
  //正解の時のみ、応募フォームを表示
  //正解は、 ’かごしま' か地元の人の言い方 'かごんま' のときのみ
  if(answer==='かごしま' || 'かごんま'===answer) { 
           document.getElementById('result-area').innerHTML=('大正解！！ 南国 鹿児島の "黒豚" "黒牛" '+
           ' "黒さつま鶏" "黒酢"  "うなぎ" 他、盛りだくさんの中から<br>うんまか~黒を お選びください！'+
           ' ＊===============================＊ <a href = "https://www.nnn.ed.nico" target="_blank">'+
           ' ご応募はこちら(N予備校)</a> '); 
    } else {
        document.getElementById('result-area').innerHTML="おしいです！　再度挑戦してみてください！";
    };
 };
 
  //エンターキーでも機能する
  answerInput.onkeydown = event => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
 };
  
 //エンターを日本語変換完了と区別するため
 //上記コードに変更
 //answerInput.onkeydown = event => {
   // if (event.key === 'Enter') {
         //assessmentButton.onclick();
     // }
//};

