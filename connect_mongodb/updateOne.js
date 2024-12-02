const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "*";

const client = new MongoClient(uri);

async function run() {
    const database = client.db("notes");
    const movies = database.collection("notes");

    // idが1のデータを更新
    const movie = await movies.replaceOne(
        { id: 1 }, // 条件
        {          // 更新するデータ
            id: 1,
            title: "ノート1のタイトル更新しました",
            subTitle: "ノート1のサブタイトルです",
            bodyText: "ノート1の本文です"
        }
    );

    console.log(movie);

    // 最後にクローズする
    await client.close();
}

run();
