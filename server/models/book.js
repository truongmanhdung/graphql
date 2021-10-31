const moogoose = require('moogoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    author: {
        type: String,
    }
})

module.exports = moogoose.module('books', BookSchema)
