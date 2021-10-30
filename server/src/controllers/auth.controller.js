const User = require('../models/user.model');

class AuthController {
    async register(req, res, next) {
        const { username, password, confirmPassword } = {...req.body};
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: `Enter your username and password to register` });
        }
        try {
            const user = await User.findOne({ username }).lean();
            if (user) {
                return res
                    .status(400)
                    .json({ success: false, message: `This account already exists` });
            }
            else if(password !== confirmPassword){
                return res.status(400).json({ success: false, message:`Your password does not match`});
            }
            else{
                const newUser = new User({ username, password });
                newUser.save();
            }
        }
        catch (err) {
            return err;
        }
    }

    async login(req, res, next){
        const { username, password } = {... req.body};
        try {
            if(!username || !password){
                return res.status(400).json({success: false, message:'You need input firsr!'});
            }
            const user = await User.findOne({ username, password}).lean();
            if(!user){
                return res.status(400).json({success: false, message:`Username or password incorrect!`});
            }
            else{
                return res.status(200).json({success: true, message:'You are logining!'});
            }
        } catch (error) {
            return res.status(500).json({success: false, message: error});
        }

    }

}

module.exports = new AuthController;