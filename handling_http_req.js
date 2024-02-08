const server = require('http');
const port=3000;
server.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var data=req.url;
    
    // res.write("the requested data showing::"+data);
    if(data=='/'){
        res.end(`<H1>Home Page<h1>`)
    }
    else if(data=='/about'){
        res.end(`<H1>About Page<h1>`)
    }
    else{
        res.end(`<H1>Unknown Page<h1>`)

    }
    
}).listen(port,()=>
{
    console.log(`Server running at http://localhost:${port}/`)
});