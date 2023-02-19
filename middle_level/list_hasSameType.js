// 自分の解答コード
// マッチングアプリ
// medium
// Redd はマッチングアプリを開発しています。
// ユーザーの属性をアルファベットで記録しており、アルファベットの並ぶパターンが同じユーザーは相性が良いと判定しています。
// ユーザー1 の属性 user1、ユーザー2 の属性 user2 が与えられるので、この 2 つが同じパターンをしているかどうか判定する、hasSameType という関数を定義してください。

function hasSameType(user1,user2){
    
  if(user1.length != user2.length) return false;

  // ユーザー１の属性をキー、それと対応するユーザー２の属性を値とするハッシュマップを作成
  let hashmap = {};
  for(i in user1){
      // ハッシュマップにキーも値も存在しない場合
      if(hashmap[user1[i]] === undefined && !(Object.values(hashmap).includes(user2[i]))){
          hashmap[user1[i]] = user2[i];
      }else if(!(hashmap[user1[i]] == user2[i])){
          return false;
      }
  }
  return true;
}