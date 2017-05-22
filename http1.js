var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200,{'content-type' : 'text'})
	response.end("helooo world")
})
server.listen(8056,function(){
	console.log("server is listening at 8056")
})