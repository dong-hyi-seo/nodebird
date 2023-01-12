const passport = require('passport');
const local = require('./local');

const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //라우터전에 접근함
    passport.deserializeUser(async (id, done) => {
        try{
            const user = await User.findOne( { where: { id }})
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error);
        }
    });
    local();
}
