import http from 'http';
import fs from 'fs';
import path from 'path';
import wait from './wait';

var server = http.createServer((request, response) => {
    var filename = path.join(__dirname, 'examples', 'simple-style.html');
    var page = fs.readFileSync(filename);
    response.writeHead(200, {'Content-Type': 'text/html'});
    wait(500);
    for (var i = 0; i < page.length; i++) {
        response.write(String.fromCharCode(page[i]));
        wait(5);
    }
    console.log(page.length * 5)
    response.end();
});

server.listen(8000);
console.log('Slow server is listening to http://localhost:8000');
