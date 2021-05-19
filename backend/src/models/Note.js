const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    titulo: String,
    contenido: {
        type: String,
        required: true
    },
    autor: String,
    dato: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

//notes
module.exports = model('note', noteSchema);