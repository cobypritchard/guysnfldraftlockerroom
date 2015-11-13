var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
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
        default: 'images/team.png'
    }
});

module.exports = mongoose.model('Team', TeamSchema);