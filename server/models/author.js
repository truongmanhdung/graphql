const moogoose = require('moogoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,

    },
    age: {
        type: Number,
    }
})

module.exports = moogoose.module('authors', AuthorSchema)
