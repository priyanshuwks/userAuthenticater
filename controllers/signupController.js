
const users = require('../modals/users');

const signupController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(403).json({
            "status" : "not allowed",
            "message" : "email & password both are required"
        })
        return;
    }
    const user = users.find(item => email === item.email);
    if(user){
        res.status(403).json({
            status : 'not allowed',
            message : 'this user is already present, please try signing in'
        })
        return;
    }
    const id = Math.floor(Math.random()*1000);
    const newuser = {
        id,
        email,
        password
    }
    users.push({
        newuser
    });

    res.status(201).json({
        status : 'singup successful',
        data : newuser
    })
}


module.exports = signupController;