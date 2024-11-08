const http = require('http');

const server = http.createServer(function(req,res){
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3])) 
        //convert array to string using JSON SYNTAX
        res.end();
    }
});

server.on('connection',(socket) =>{
    console.log("New Connection...");
    
})
server.listen(3000);

console.log('Listening on port 3000...');


server.emit

