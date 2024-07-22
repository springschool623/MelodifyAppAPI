import User from '../model/user'
export const getProducts = async (req, res) => {
    try {
        const data = await User.find();
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }}

export const getUserById = (req, res) => {
    console.log(req.query);
}

export const addUser = async (req, res) => {
    try {
        const data = await User(req.body).save();
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = (req, res) => {
    console.log(req.query);
}

export const updateUser = (req, res) => {
    console.log(req.query);
}