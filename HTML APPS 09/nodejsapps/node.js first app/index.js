// web application
import http from 'http';

//server logic
http.createServer((req,res) => {
    res.end("welcome to node.js wprld!!!");
}).listen(4000);

console.log("server running on port 4000!!!");