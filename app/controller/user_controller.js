const User = require('../model/user_model');

const getUserItem = (request, response) => {

}

const createNewUser = (request, response) => {
    User.create(request.body).then(data => {
        return response.status(201).json({
            data, 
            message: 'User created successfully.'
        })
    }).catch(err =>{
        response.status(400).json({
            error: err,
            message: 'Something went wrong'
        })
    });
}


const userLogin = (request, response) => {
    
}

const updateUser = (request, response) => {

}

const deleteUser = (request, response) => {

}

module.exports = { 
    getUserItem,
    createNewUser,
    updateUser,
    deleteUser,
    userLogin
};