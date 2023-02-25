const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debes ingresar el nombre de una pelicula'],
        minlength: [3, 'Debe ingresar al menos 4 caracteres'],
        maxlength: [30, 'Too Long!'],
    },    
    category: {
        type: String,
        required: [true, 'Debes ingresar una categoria'],
        minlength: [3, 'Debe ingresar al menos 4 caracteres'],
        maxlength: [10, 'Too Long!'],
    },
    year: {
        type: Number,
        required: [true, 'Debes ingresar el año'],
        min: [1800, 'El año permitido']
    },
    photo: {
        type: String
    },      
}, { timestamps: true });

movieSchema.plugin(uniqueValidator);

const Movie = model('Movie', movieSchema);

module.exports = Movie;