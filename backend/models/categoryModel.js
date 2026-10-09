const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true})

module.exports = mongoose.model("Category", categorySchema)

// _id : mongodb default, 24bit hex string, type: ObjectId
// timestamps: true -> createdAt, updatedAt