const { User } = require('../models/user');

const addUser = (userData) => {
    newUser = new User(
        userData
    )
    newUser.save();
}

