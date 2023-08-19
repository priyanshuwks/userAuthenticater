const users = require('../modals/users');

const signinController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = users.find(item => email === item.email);

    if(!user){
        res.status(403).json({
            status : "not allowed",
            message : "user not present, please signup first"
        });
        return;
    }else{
        if(password === user.password){
            res.status(200).json({
                status : 'successful',
                message : 'signin successful'
            })
            return;
        }else{
            res.status(403).json({
                status : 'login failed',
                message : 'incorrect password'
            })
        }
        
    }

    
}
module.exports = signinController;