// 共通の接頭辞
// easy
// Warren は、英語は接頭辞によって意味を推測できると考えました（例：discount, disable など）。そこで、複数の文字列から共通の接頭辞を抜き出し、まとめようと思っています。
// 文字列 s1 と s2 が与えられるので、共通の接頭辞を返す、commonPrefix という関数を再帰によって作成してください。

function commonPrefix(s1,s2){
  const len = Math.min(s1.length, s2.length);
  return commonPrefixHelper(s1,s2,len,'',0);
}

function commonPrefixHelper(s1,s2,len,res,index){
  if(s1[index] != s2[index]|| index == len) return res;
  res += s1[index];
  return commonPrefixHelper(s1,s2,len,res,index+1);
}