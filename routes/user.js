const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

const router =  express.Router();

/**
 * POST user login
 */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            //status code 401: 로그인이 잘못되었을때..
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            return res.status(200).json(user);
        })
    })(req, res, next);
});
router.post('/',async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        //email 중복 체크
        if (exUser) {
            //403 http status : 금지의 의미를 가지고있음
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        //201 http status : 잘 생성됨의 의미
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); //500 http status (서버에러)
    }
})

module.exports = router;
