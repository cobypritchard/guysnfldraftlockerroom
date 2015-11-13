var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    image: {
        type: String,
        default: 'images/user.png'
    }
});

module.exports = mongoose.model('Player', PlayerSchema);