const mongoose = require('mongooose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter a name!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
