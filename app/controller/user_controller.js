const User = require('../model/user_model');
const http_formatter = require('../util/http_formatter');

const getUserItem = async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const users = await User.find({}).skip(perPage * (pageNo - 1)).limit(perPage);
        return response.status(200).json(http_formatter( users,"users got succesfully"));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
    }
}
const createNewUser = async (request, response) => {
    try {
        const user = await User.create(request.body);
        return response.status(201).json(
            http_formatter(user, "User created successfully"),
        );
    } catch ( err ) {
        return response.status(400).json(http_formatter(err, "Something went wrong, please try again", false));
    }
}
const userLogin = (request, response) => {
    
}

const updateUser = async (request, response) =>  {
    try {
        
    
    const {user_id} = request.params;
    if(!user_id) {
        throw (new Error('Product ID is mandatory'));
    }
const current_user =await User.findById(user_id);
if(!current_user) {
    return response.status(400).json(http_formatter({}, "Invalid user id", false));
}
const _body = request.body;
['name','phone','email','password','gender'].forEach(key=>{
    if(_body[key] !== undefined && _body[key] !== null){
        current_user[key] = _body[key]
    }
})
const address = request.body.address;
['line1', 'state', 'pincode'].forEach(key => {     
        if(address && address[key] !== null && address[key] !== undefined) {
            current_user.address[key] = address[key];
        }
    })

  const __updateduser = await current_user.save();
  return response.status(200).json(http_formatter(__updateduser,"user updated succesfully")) 
} catch (error) {
    return response.status(400).json(http_formatter(error,"something went wrong"))
}
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