//.env 환경변수 사용
const dotenv = require('dotenv').config();

const express = require('express');
const app = express();


//post방식의 데이터 사용을 위한 body-parser 설정
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//뷰엔진 설정
app.set('view engine', 'ejs');

//서버가 정적파일을 제공하도록 하기 위한 설정
app.use(express.static(__dirname + ''));

app.listen(8080, function(){
  console.log("포트 8080으로 서버 대기중 ...")
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

