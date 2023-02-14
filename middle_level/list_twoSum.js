// 整数によって構成される配列 intArr と、整数 sumInt が与えられるので、配列の中の 2 つの要素を足して sumInt に一致するインデックスを返す、twoSum という関数を作成してください。組み合わせが複数存在する場合は、値の小さいインデックスを優先してください。また、組み合わせが存在しない場合は、空の配列を返してください。

function twoSum(intArr,sumInt){
  // キーを配列の要素、値を配列のインデックスとするハッシュマップを初期化
  let hashmap = {};

  // キーの重複を避けてハッシュマップにキーと値を格納していく
  for(let i = 0; i < intArr.length; i++){
      const curr = intArr[i];
      if(!(curr in hashmap)) hashmap[curr] = i;
  }

  // 引数の配列をループ
  // 上記で作成したハッシュマップのキーの中に、そのループにおける配列の要素とsumIntの差分の数値が存在し、
  // かつその数値の要素と配列の要素が同一でない（＝両者のインデックスが異なる）場合、
  // リターンする配列にそれらのインデックスを昇順に格納する
  for(let i = 0; i < intArr.length; i++){
      const diff = sumInt - intArr[i];
      if(diff in hashmap && i !== hashmap[diff]){
          const j = hashmap[diff];
          return j > i ? [i, j] : [j, i];
      }
  }

  // 組み合わせが存在しない＝上記ループ内でリターンされなかった場合、空の配列を返す
  return [];
}