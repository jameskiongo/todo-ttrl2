//new schema
const mongoose = require("mongoose");

//schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('todo', TodoItemSchema);