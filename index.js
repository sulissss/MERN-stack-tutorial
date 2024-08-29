const http = require('http');

console.log('yoo');

data = {'age': 32};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`${req.method}`);
    }
    else if (req.url === '/demo') {
        res.end('demooooooo');
    }
    else {
        console.log('server started');
        res.setHeader('Content-Type', 'application/json');
        // res.end('<h2>hi brother</h2>');
        res.end(JSON.stringify(data));
    }
})

server.listen(8080);