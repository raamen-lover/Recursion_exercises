// 解答コード模写、解き直し
function findXTimes(teams){
  // 各チームの試合数を格納するハッシュマップを作成
  let hashmap = {};
  for(i in teams){
      if(hashmap[teams[i]] === undefined) hashmap[teams[i]] = 1
      else hashmap[teams[i]]++;
  }

  // スプレッド構文「...」を使って要素を展開し、最大値と最小値を取得します。
  // 最大値と最小値が同じならtrue
  return Math.max(...Object.values(hashmap)) == Math.min(...Object.values(hashmap));
}