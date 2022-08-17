const mongoose =require ('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        min:6,
        max: 100
    },
    email: {
        type:String,
        required: true,
        max: 100,
        min:6
    },
    password: {
        type:String,
        required: true,
        max: 1024,
        min:6
    },
    
    date: {
        type: String,
        default: Date.now
    }
    })

    module.exports =mongoose.model ('User', userSchema)