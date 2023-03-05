function caesarCiper(message,n){
  // 空白を消す
  const string = message.replace(/\s+/g, '');
  // レスポンスを初期化
  let res = '';

  // 一文字ずつシフトさせていく
  for(let i = 0; i < string.length; i++){
      // 文字は26種類なので、1文字分シフトさせた文字と27文字分シフトさせた文字は同じになります
      // そのため、26で割った余りで文字をシフトさせます
      res += converter(string[i], n % 26);
  }

  return res;
}

// 文字をシフトさせる関数
function converter(char, n){
  // 文字を文字コードに変えて、n文字分だけシフトさせます
  // zの文字コードである122を超えた場合は、26を引いてaから数えられるようにします
  let ascii = char.charCodeAt(0);
  let shifted = ascii + n > 122 ? ascii + n -26 : ascii + n;
  return String.fromCharCode(shifted);
}