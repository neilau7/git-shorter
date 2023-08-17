require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));//process.cwd(): current path
app.use(bodyParser.urlencoded({ extended: true }));// 使用 body-parser 中間件解析 POST 請求的數據

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
app.use(bodyParser.json()); // 解析 JSON 格式的請求體



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});


app.post("/api/shorturl/", (req,res) => {
  const regExp = /http:\/\/\w+.\w+.\w+/;
  const branch = req.params.branch;
  const url = req.body.url;
  if (regExp.test(url)){
    console.log(url);
    res.json({ original_url : `${url}`, short_url : 1});
  }else{
    res.json({ error: 'invalid url'});
  }

  //const shortUrl = ;
})
