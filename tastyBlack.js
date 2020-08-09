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
const assessmentButton =    document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = ( ) => {
const answer = answerInput.value;

     if(answer.length===0) { //空欄の時は処理を終了
        return;
    };
    
   if(answer==='かごしま') {   //正解の時のみ、応募フォームを表示する
        document.getElementById('result-area').innerHTML=('大正解！！　九州 かごしまの「黒豚」「黒酢」「黒さつま鶏」「うなぎ」他、盛りだくさんの中から<br>うまか黒を お選びください！ ＊==============＊ <a href = "https://www.nnn.ed.nico" target="_blank"> ご応募はこちら(N予備校)</a> '); 
    }else{
        document.getElementById('result-area').innerHTML="おしいです！　再度挑戦してみてください！";
    };
 };
 
 //エンターキーでも機能する
 //answerInput.onkeydown = event => {
    // if (event.key === 'Enter') {
        // assessmentButton.onclick();
    //  }
//};

//エンターキーのとき、
//日本語変換完了のEnterと区別したいので試作中
//answerInput.onkeydown = event => {
       // if ( 13 === event.keyDownCode  &&  event.keyUpCode===13) {
       // assessmentButton.onclick();
      //  } else {
      //  return;
       // }
//};

