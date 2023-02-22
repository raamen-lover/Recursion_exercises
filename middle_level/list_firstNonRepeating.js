// 自分の解答コード
// 復習のお知らせ機能
// medium
// Zollar は算数の計算練習ができるサイトを立ち上げました。そのサイトは a 問題から z 問題まで 26 個の問題があります。このサイトには復習機能がついており、1 回しか解いていない問題をトップページの一番上に表示するようにしました。あるユーザーが解いたことのある問題一覧を表す小文字によって構成される文字列 s が与えられるので、その中で 1 番最初に出てくる 1 回しか解いたことがない問題をインデックスで返す、firstNonRepeating という関数を定義してください。当てはまる文字がない場合は -1 を返してください。
function firstNonRepeating(s){
  // 文字とその出現回数をそれぞれキー、値とするハッシュマップを作成
  let hashmap = {};

  // 引数の文字列をループし、ハッシュマップになければ格納する
  for(i in s){
      if(hashmap[s[i]] == undefined) hashmap[s[i]] = 1
      else hashmap[s[i]]++;
  }

  const chars = Object.keys(hashmap).filter(key => hashmap[key] == 1);
  let res = [];
  if(chars.length != 0){
      chars.forEach(value => res.push(s.indexOf(value)));
      return Math.min(...res);
  }else{
      return -1;
  }
}