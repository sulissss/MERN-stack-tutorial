const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(201).send(`${req.method} ${req.hostname}/${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
})

app.post('/demo', (req, res) => {
    res.json({msg: 'you posted'});
})

app.listen(8080, () => {
    console.log('server running');
});