const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models')
const app = express();

//sequelize가 model에 정의해둔대로 테이블을 생성해준다
//대신 테이블이존재하지 않을경우에만 생성하는 쿼리를 날려줌
//처음 시도할때 'npx sequelize db:create' 명령어를 해줘야함.
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    }).catch(console.error);

//request body json, urlencoded 설정 (단, 아래 router 설정보다 먼서 설정해주어야함)
app.use(cors({
    origin : '*',
})); //Access Allow cross origin 설정
app.use(express.json());//req json type
app.use(express.urlencoded({ extended: true })); //form type

app.use('/post', postRouter); //postRouter에 prefix 설정
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중 !!');
});

