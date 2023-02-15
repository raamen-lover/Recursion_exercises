// Brecker がクイズ大会に参加した時、ある文字列をランダムに並び替えた時に、最長となる回文を答える問題が出題されました。
// 文字列 string が与えられるので、最長の回文の長さを返す、longestPalindromeLength という関数を作成してください。
// 例えば、文字列 hello 内の文字を組み合わせてできる最長の回文の 1 つは lhl となるので、3 を返します。

function longestPalindromeLength(string){
  // 各文字の出現回数を格納するハッシュマップを作成する
  // 出現回数が偶数の文字の回数を合計し、出現回数が奇数の文字があればその最大値を足す
  let hashmap = {};
  for(let i = 0; i < string.length; i++){
      const curr = string[i];
      if(!(curr in hashmap)) hashmap[curr] = 1
      else hashmap[curr]++;
  }
  console.log(hashmap);
  // リターンする変数を初期化
  let count = 0;
  // 奇数の出現回数
  let oddCnt = 0;
  for(key in hashmap){
      const curr = hashmap[key];
      if(curr % 2 == 0) {
          count += curr;
      }
      else {
          oddCnt++;
          count += curr - 1;
      }
  }
  
  return oddCnt > 0 ? count + 1 : count;
}