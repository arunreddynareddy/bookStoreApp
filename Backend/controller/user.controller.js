import User from "../modal/user.modal.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})   
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            name,
            email,
            password: hashPassword
        })
        await createUser.save()
        res.status(201).json({message: "User created successfully", User: {
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email
        }})
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        const isMatched = await bcryptjs.compare(password, user.password)
        if (!user || !isMatched) {
            return res.status(400).json({message: "Invalid username or password"})
        }
        else {
            res.status(200).json({message: "Login Successful", user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }})
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}