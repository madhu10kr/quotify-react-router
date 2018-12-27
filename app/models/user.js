const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(value){
            return validator.isEmail(value)
        },
        message: 'invalid Email format'
    },
    password: {
        type: String,
        required:true,
        minlength: 8,
        maxlength: 128
    },
   
});

const User = mongoose.model('User',userSchema);

module.exports = {
    User
}