const User = require('../models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

class AuthController {
    async valid(req, res) {
        try {
            const user = await User.findOne({_id: req.userId});
            if(!user) return res.status(404).json({success: false, message: 'User not found'});
            return res.json({success: true, userId : user._id});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }
    
    async register(req, res, next) {
        const { username, password, confirmPassword } = { ...req.body };
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: `Enter your username and password to register` });
        }
        try {
            const user = await User.findOne({ username }).lean();
            if (user) {
                return res
                    .status(401)
                    .json({ success: false, message: `This account already exists` });
            }
            else if (password !== confirmPassword) {
                return res.status(400).json({ success: false, message: `Your password does not match` });
            }
            else {
                const hashedPassword = await argon2.hash(password);
                const newUser = new User({ username, password: hashedPassword });
                newUser.save();
                const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
                return res.status(200).json({ success: true, message: `You are register succesfully!`, accessToken });
            }
        }
        catch (err) {
            return err;
        }
    }

    async login(req, res, next) {
        const { username, password } = { ...req.body };
        try {
            if (!username || !password) {
                return res.status(400).json({ success: false, message: 'You need input first!' });
            }
            const user = await User.findOne({ username }).lean();
            if (user) {
                const validPassword = await argon2.verify(user.password, password);
                if (validPassword) {
                    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                    return res.status(200).json({ success: true, message: 'You are logining!', accessToken });
                }
            }
            return res.status(400).json({ success: false, message: `Username or password incorrect!` });
        } catch (error) {
            return res.status(500).json({ success: false, message: error });
        }

    }

}

module.exports = new AuthController;