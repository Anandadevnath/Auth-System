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
        return;
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
    const { email, password, username } = req.body

    if (!email || !password || !username) {
        res.status(400);
        throw new Error("Please provide email, username, and password");
    }

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        res.status(404).json({ message: "Username is incorrect" });
        return;
    }

    if (existingUser.email !== email) {
        res.status(401).json({ message: "Email does not match the username" });
        return;
    }

    const isvalidPassword = await bcrypt.compare(password, existingUser.password)
    if (!isvalidPassword) {
        res.status(401).json({ message: "Invalid password" });
        return;
    }

    const token = createToken(res, existingUser._id);
    res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        token: token,
    });
});

const logoutUser = asynchandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ messege: 'Logged out successfully' });
});

export { createUser, loginUser, logoutUser };