var http = require('http'),
    server = http.createServer(function(request,response){
        response.end("Response From Node Server");
    });
server.listen(3000, function(){
    console.log("Server started at port: 3000");
});