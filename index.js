// const exp = require('constants');
const express = require('express');
const app = express();


// const morgan = require('morgan');
// app.use(morgan('dev'));
app.use(express.json());

const auth = (req, res, next) => {
    if (req.body.password === 'tazers') {
        next();
    }
    // res.status(404).send('Unauthorized');
}

app.use((req, res, next) => {
    console.log(`${req.get('User-Agent')}`);
    next();
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
})

app.post('/demo', (req, res) => {
    // console.log(req.query);
    res.json(req.query);
})

app.post('/demo/:name/:age/:subject', (req, res) => {
    res.json(req.params)
})

app.post('/body-send', auth, (req, res) => {
    res.send(req.body);
})

app.listen(8080, () => {
    console.log('server running');
});