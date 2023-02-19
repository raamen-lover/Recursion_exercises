// Whalum は兄が買うものはなんでも欲しがる性格です。
// 兄弟で一緒にネットショッピングをするときも、兄が買うものと同じものを買おうとしていました。
// 兄の注文リスト listA と Whalum の注文リスト listB が与えられるので、兄が買うもので Whalum の注文リストに入ってないものを返す、missingItems という関数を作成してください。
// もし、被りが一切存在しない時は、兄の注文リストをそのまま返してください。
function missingItems(listA,listB){
  // Whalumの配列要素をキーとするハッシュマップを作成
  let hashmap = {};
  for(let i = 0; i < listB.length; i++){
      if(hashmap[listB[i]] == undefined) hashmap[listB[i]] = listB[i];
  }

  // listAをループし、ハッシュマップに存在しなければ結果格納用の配列に格納する
  // 結果格納用の配列を初期化
  let res = [];
  for(i in listA){
      if(hashmap[listA[i]] == undefined) res.push(listA[i]);
  }
  return res.length == 0 ? listA : res;
}