import mongoose from 'mongoose'

const cardScheme = mongoose.Schema({
    name: String,
    breed: String,
    imgUrl: String,
    age: String,
    bio: String,

})

export default mongoose.model('cards', cardScheme);