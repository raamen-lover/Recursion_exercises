// x回出現　自分の解答コード
// easy
// Block は野球のリーグ戦で運営を行なっており、試合の組み合わせを考えています。
// a チームから z チームまでの 26 チームが存在し、全チームが同じ数だけ試合をするようにしなければいけません。
// Block は試合が行われるチームを発見するたびに、そのチーム名を記録しています（a チームを発見した場合は a が追加され、"aabcbcdda" のような記録ができます）。
// 試合を行なったチーム一覧 teams が与えられるので、全てのチームが同じ数だけ試合をしているかどうか判定する findXTimes という関数を作成してください。

function findXTimes(teams){
  // 各チームの試合数を格納するハッシュマップを作成
  let hashmap = {};
  for(i in teams){
      if(hashmap[teams[i]] === undefined) hashmap[teams[i]] = 1
      else hashmap[teams[i]]++;
  }

  // 試合数を格納する変数を初期化
  let timeToCheck = 0;

  // ハッシュマップの値を配列に格納
  // 配列をループ
  let times = Object.values(hashmap);
  for(i in times){
      if(timeToCheck == 0) timeToCheck = times[i];
      if(timeToCheck != times[i]) return false;
  }
  
  return true;
}