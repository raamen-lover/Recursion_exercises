// Richard は SNS アプリを開発し、ユーザーがパスワードを作成する時にパスワードの強度を表示する機能を実装しようと思いました。
// そこで、同じ文字を含まない文字数が長いほど強度が大きい仕組みにしようと考えています。
// 小文字のパスワード password が与えられるので、同じ文字を含まない最長の文字列の長さを返す、longestSubstringLength という関数を作成してください。
// 例えば、slloel では、loe が最長の部分文字列になります。

function longestSubstringLength(password){
  // 連続する文字列の文字数を格納する配列を初期化
  let lens = [];

  // 文字の連続状態を示すフラグを初期化
  let continuing_flg = false;

  // 同じ文字を含まず連続する文字列の各文字をキーとして格納するハッシュマップを初期化
  let hashmap = {};

  for(let i = 0; i < password.length; i++){
       // ループ内変数currString（その時の文字）を使用
      const currString = password[i];

      // currStringがハッシュマップにない場合、キーをcurrentString、値をインデックスとして格納する
      // この時フラグがfalseならtrueにする。
      if(hashmap[currString] === undefined){
          hashmap[currString] = i;
          if(!continuing_flg) continuing_flg = true;
      }else{ // currStringがハッシュマップにある場合
          // フラグをfalseにする
          continuing_flg = false;
          // 配列lengthにハッシュマップの要素数を格納する
          lens.push(Object.keys(hashmap).length);

          // ループのインデックスを、キーがhashmap[currString]の要素の値
          // （＝1回目にその文字が出現した時のインデックス）に更新
          i = hashmap[currString];
          
          // ハッシュマップ初期化
          hashmap = {};
      }
  }
  if(continuing_flg) lens.push(Object.keys(hashmap).length);
  
  return Math.max(...lens);
}