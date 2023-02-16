// リズムゲームの模範解答
function hasSameStructure(inputChar, wordList){
  // 文字列をスペースで区切って配列にします
  let arr = wordList.split(' ');

  // inputCharとarrの長さが違えばfalse
  if(inputChar.length != arr.length) return false;

  // inputCharの文字をキー、arrの文字列を値としてハッシュマップを作成
  let hashmap = {};

  // inputCharをループ
  // 次のいずれかの場合はfalseをリターン：
      // ハッシュマップにinputChar[i]があるけど、inputChar[i] : arr[i]ペアがないとき
      // ハッシュマップにinputChar[i]がないけど、arr[i]があるとき
          // ＝その時のinputChar[i]と別の文字が、その時の単語に対応する文字（キー）となっているから
  // それら以外の場合はinputChar[i] : arr[i]ペアをハッシュマップに格納する
  for(let i = 0; i < inputChar.length; i++){
      if(hashmap[inputChar[i]] !== undefined && hashmap[inputChar[i]] != arr[i]) return false;
      if(hashmap[inputChar[i]] === undefined && Object.values(hashmap).includes(arr[i])) return false;
      else hashmap[inputChar[i]] = arr[i];
  }
  return true;
}