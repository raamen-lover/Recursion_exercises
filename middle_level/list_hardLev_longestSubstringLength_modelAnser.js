// 解答コード模写
function longestSubstringLength(password){
  // 各文字のインデックスを格納
  let hashmap = {};
  // 同じ文字を含まない最大文字数を格納
  let window = 0;
  // 同じ文字を含まない部分文字列の始まりのインデックス
  let start = 0;

  // 各文字を一文字ずつ取得
  for(let end = 0; end < password.length; end++){

      // hashmapに存在していたらstartを更新
      if(hashmap[password[end]] !== undefined){
          start = Math.max(start, hashmap[password[end]] + 1);
      }

      // その文字を追加又は値を更新
      hashmap[password[end]] = end;

      // windowを更新
      window = Math.max(window, end - start + 1);
  }
  return window;
}