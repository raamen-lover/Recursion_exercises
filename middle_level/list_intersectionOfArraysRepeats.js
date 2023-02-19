// 配列の重複（区別あり）
// easy
// 整数で構成される配列 num1 と num2 が与えられるので、両方の配列に表示されている要素を小さい順で配列で返す、intersectionOfArraysRepeats という関数を作成してください。
function intersectionOfArraysRepeats(intList1,intList2){
  // intList1のインデックスをキー、要素を値としてハッシュマップを作成する
  let hashmap =  {};
  for(i in intList1){
      hashmap[i] = intList1[i];
  }

  let res = [];
  for(i in intList2){
      const key = Object.keys(hashmap).find(key => hashmap[key] == intList2[i]);
      console.log('key: ' + key);
      if(key != undefined){
          res.push(Number(hashmap[key]));
          delete hashmap[key];
      }
  }
  res.sort(function(a,b){
      return a - b;
  });
  return res;
}