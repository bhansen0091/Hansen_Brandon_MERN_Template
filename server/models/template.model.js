const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    itemOne: {
        type: String,
        required: [true, "Required Field"],
        minlength: [5, "Must be at least 5 characters long."]
    },
    itemTwo: {
        type: String,
        required: [true, "Required Field"],
        minlength: [3, "Must be at least 3 characters long."]
    }
}, {timestamps:true})

const Template = new mongoose.model("Template", TemplateSchema);

module.exports = Template;