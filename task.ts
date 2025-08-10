const http = require('http')


const server = http.createServer((req,res) => {

   // res.setHeader('Content-Type', 'application/json'); 

    if(req.method === "GET"  && req.url === "/"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "Welcome to the server"}))
    }
    else if (req.method === "GET"  && req.url === "/about"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is the about route"}))
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Route not found"}))
    }

});

server.on('error', (error) => {
  console.error('server error: ',error)
});

const PORT = 3000;

server.listen(PORT,()=> {
    console.log(`server running at http://localhost:${PORT}/about`)
});