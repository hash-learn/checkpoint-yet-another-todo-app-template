const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TodoSchema = new schema({
    // write your schema here
    text: {
        type: String,
        required: true
    },
    // you can add more fields here
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;