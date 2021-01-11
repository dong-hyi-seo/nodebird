const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models')
const passportConfig = require('./passport');

dotenv.config();
const app = express();
//sequelize가 model에 정의해둔대로 테이블을 생성해준다
//대신 테이블이존재하지 않을경우에만 생성하는 쿼리를 날려줌
//처음 시도할때 'npx sequelize db:create' 명령어를 해줘야함.
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    }).catch(console.error);
passportConfig();

//request body json, urlencoded 설정 (단, 아래 router 설정보다 먼서 설정해주어야함)
app.use(cors({
    origin : 'http://localhost:3000',
    credential: true, //api, front간의 도메인이 다를경우 쿠키도 전달이안됨. 해결은 해당 옵션 추가
})); //Access Allow cross origin 설정
app.use(express.json());//req json type
app.use(express.urlencoded({ extended: true })); //form type
app.use(cookieParser('nodebirdsecret'));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter); //postRouter에 prefix 설정
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중 !!');
});

