const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }]
})

const userModel = mongoose.model('user',userSchema)

module.exports = {userModel}