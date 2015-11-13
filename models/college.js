var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        lines: {
            type: [String],
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        }
    },
    image: {
        type: String,
        default: 'images/college.png'
    }
});

module.exports = mongoose.model('College', CollegeSchema);