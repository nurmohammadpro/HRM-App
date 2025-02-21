//Create User
export const createUser = async(req, res) => {
    return res.json({
        status: "success",
        message: "User created successfully"
    })
}

//Get User
export const getUser = async (req, res) => {
    return res.json({
        status: "success",
        message: "User fetched successfully"
    })
}

//Update User
export const updateUser = async (req, res) => {
    return res.json({
        status: "success",
        message: "User updated successfully"
    })
}

//Delete User
export const deleteUser = async(req, res) => {
    return res.json({
        status: "success",
        message: "User deleted successfully"
    })
} 