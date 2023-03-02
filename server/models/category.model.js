const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debes ingresar el nombre de una categoria'],
        minlength: [3, 'Debe ingresar al menos 4 caracteres'],
        maxlength: [30, 'Too Long!'],
    },    
}, { timestamps: true });

categorySchema.plugin(uniqueValidator);

const Category = model('Category', categorySchema);

module.exports = Category;