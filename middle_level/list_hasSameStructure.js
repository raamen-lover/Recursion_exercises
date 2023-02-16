// Kilson はリズムゲームをプレイしており、画面上に表示される文字と同じパターンでボタン入力をする必要があります。
// ユーザーのボタン入力 inputChar、画面上に表示される単語一覧 wordList が与えられるので、2 つが同じパターンかどうか判定する hasSameStructure という関数を定義してください。
// 空白は同じ文字としてカウントしないものとします。

// 例: abcabc, soccer baseball tennis soccer baseball tennis

// -> inputChar の文字の並び方と wordList の文字の並び方が対応しているため true を返します。

function hasSameStructure(inputChar,wordList){
  // 方針：inputCharとwordListの単語の対応をハッシュマップにする。
  // ハッシュマップは2種類作成する（inputCharをキーとして対応する単語を値とするものと、その逆）
  // inputCharをループし、その時のinputCharと単語の組み合わせが両方のハッシュマップに存在しない場合は
  // 両方のハッシュマップにそれらを格納する。
  // 存在する場合、そのinputCharに対応する単語とその時の単語が不一致の場合又は
  // その単語に対応するその時のinputCharが不一致の場合は
  // falseをリターンする

  // wordListを配列に格納する
  const words = wordList.split(/\s/);
  
  // inputCharをキーとするハッシュマップ初期化
  let hashChar = {};

  // wordsをキーとするハッシュマップ初期化
  let hashWord = {};
  
  for(let i = 0; i < inputChar.length; i++){
      const currChar = inputChar[i];
      const currWord = words[i];
      if(hashChar[currChar] == undefined && hashWord[currWord] == undefined) {
          hashChar[currChar] = currWord;
          hashWord[currWord] = currChar;
      }
      else if(hashChar[currChar] != currWord || hashWord[currWord] != currChar) return false;
  }
  return true;
}