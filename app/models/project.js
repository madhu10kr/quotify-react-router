const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required:true,
    },
    persons : [{
        name:{
            type:String
        },
        number:{
            type:Number
        }
    }]
   
});

const Project = mongoose.model('User',projectSchema);

module.exports = {
    Project
}