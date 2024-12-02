var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://kanekou080103:dlpEVAa4NawAFmeM@test.dgfag.mongodb.net/?retryWrites=true&w=majority&appName=test";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notes = database.collection('notes');

  // idが1のドキュメントを取得
  const query = { id: 2 };
  const note = await notes.findOne(query);

  res.json(note.title);
});

module.exports = router;
