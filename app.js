const express = require('express');
const postRouter = require('./routes/post');
const app = express();

app.use('/post', postRouter); //postRouter에 prefix 설정

app.listen(3065, () => {
    console.log('서버 실행 중');
});

