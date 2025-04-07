import User from "../models/userModel.js";
import asynchandler from "../middleware/asynchandler.js";
import bcrypt from "bcryptjs";
import createToken from '../Utils/createToken.js'

const createUser = asynchandler(async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        throw new Error("please fill all field")
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400).send('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new User({ username, email, password: hashedPass });

    try {
        await newUser.save();
        createToken(res, newUser._id);

        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        })

    } catch (err) {
        res.status(400)
        throw new Error('Invaild user data')
    }
})

const loginUser = asynchandler(async (req, res) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const isvalid = await bcrypt.compare(password, existingUser.password)

        if (isvalid) {
            const token = createToken(res, existingUser._id);
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                token: token
            });
            return;
        }
    }
})

const logoutUser = asynchandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ messege: 'Logged out successfully' });
});

export { createUser, loginUser, logoutUser };