// 自分の解答コード
// ペアチケット
// easy
// ある学校では文化祭のときに、生徒全員に数字をランダムに配っています。
// そして同じ数字同士を持つペアが現れたら、テーマパークのペアチケットをプレゼントしています（3 人以上いたら適応外になります）。
// 生徒たちが持っている数字 numbers が与えられるので、ペアになる生徒たちの数字を返す findPairs という関数を作成してください。配列は昇順で返してください。

function findPairs(numbers){
    let hashmap = {};
    for(i in numbers){
        if(hashmap[numbers[i]] === undefined) hashmap[numbers[i]] = 1
        else hashmap[numbers[i]]++;
    }

    let res = Object.keys(hashmap).filter(x => hashmap[x] == 2);
    res.sort(function(a,b){
        return a-b;
    })
    console.log(res);
    return res;
}