const User = require('../Models/User')
const asynchandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

// Controller to get all users
const getAllUsers = async (req, res) => {
    try {
        // Use Mongoose to fetch all users from the database
        const users = await User.find({}).exec();
        // Send the list of users as a response
        res.json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get user details by ID
const getUserById = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a URL parameter

    try {
        // Use Mongoose to find a user by their ID
        const user = await User.findById(userId).exec();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send the user data as a response
        res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, pic } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400)
            throw new Error("User already exists")
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            pic
        })

        if (user) {
            res.status(200).json({
                _id: user._id,
                firstName: user.firstName,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400)
            throw new Error("Error occur")
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).send("User Already exists")
    }
}

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (user.password === password)) {
            res.json({
                _id: user._id,
                firstName: user.firstName,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
        }

        else {
            res.status(400)
            throw new Error("Invalid email or password !")
        }

    }
    catch (e) {
        console.log(e);
        res.status(400).send("Invalid email or password !")
    }
}

module.exports = { registerUser, authUser, getAllUsers, getUserById }