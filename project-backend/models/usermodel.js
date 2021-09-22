
 
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthday: Date,
    gender: {
        type: String,
        enum: ['female','male']
    },
    password: String
})

const userModel = mongoose.model('Users',userSchema)
module.exports = userModel






// user -> email, fist_name, last_name
// business -> name, address, owner, industry
// reviews -> business_id, user_id, comment, starRating
