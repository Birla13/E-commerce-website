const User = require('../models/user.model');

function getSignup(req,res) {
    res.render('customer/auth/signup')
}

function signup(req,res){
    new User();
}

function getLogin(req,res) {

}

module.exports = {
    getSignup:getSignup,
    getLogin:getLogin,
    signup:signup
}