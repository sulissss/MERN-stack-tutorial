const express = require('express');

server = express();
server.use(express.json());

const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo-2');
    console.log('database connected');
}

// const taskSchema = new Schema({
//     title: {type: String, required: true, unique: true},
//     status: Boolean,
//     date: {type: Date, default: Date.now}
// })

// const Task = mongoose.model('Task', taskSchema);

// server.post('/task/:title', (req, res) => {
//     const newTask = new Task({
//         title: req.params.title,
//         status: true
//     });
//     newTask.save();
//     res.send('Task saved succssfully!');
// })

const productRouter = require('./routes/product-route');
server.use('/products', productRouter.router);


server.listen(8080, () => {
    console.log('server started');
});