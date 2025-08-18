const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url ==="/"){
        res.end("asslamualykum...");
    }
    else if(req.url === "/contact"){
        res.end("this is our contact page");
    }
    else if(req.url === "/about"){
        res.end("this is our about page");
    }
    else{
        res.end("this page is not found...");
    }
});

server.listen(4000, () => {
    console.log("I m listening at port number 4000");
});
