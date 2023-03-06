// 自分の解答コード
// 偶奇の入れ替え
// easy
// Stacey は文字の奇数番目と偶数番目を入れ替えても、単語や文章として成り立つのか気になりました。空白を含まない文字列 s が与えられるので、インデックスの偶数番目と奇数番目を入れ替える、swapPosition という関数を再帰を使って作成してください。
function swapPosition(s){
  return swapPositionHelper(s, 0, '');
}

function swapPositionHelper(s, i, swapped){
  if(s[i + 1] == undefined) return swapped + s[i];
  if(s[i + 2] == undefined) return swapped + s[i + 1] + s[i];
  return swapPositionHelper(s, i + 2, swapped + s[i + 1] + s[i]);
}