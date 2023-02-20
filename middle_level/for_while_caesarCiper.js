// 自分のコード
// カエサルの暗号
// 紀元前 70 年頃、古代ローマの軍事的指導者ガイウス・ユリウス・カエサル（Gaius Iulius Caesar）は秘密文書を敵に解読されないために文字列に含まれる全ての単語を数文字分シフトさせる方法を思いつきました。
// 小文字によって構成された文字列 message、自然数 n が与えられるので、暗号を作成する caesarCipher という関数を作成してください。
// z の次は a に戻ることに注意してください。また空白によってメッセージが読み取られないよう、返される文字列の空白は全て取り除いてください。
function caesarCiper(message,n){
  const s = message.replace(/\s+/g,'');
  console.log(s.charCodeAt(0) + n);
  let res = '';
  for(let i = 0; i < s.length; i++){
      let charCode = s.charCodeAt(i) + n;
      charCode = charCode >=123 ? (charCode - 123) % 26 + 97 : charCode;
      res += String.fromCodePoint(charCode);       
  }
  return res;
}