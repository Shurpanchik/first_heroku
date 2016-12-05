/**
 * Created by JFCS on 1/5/16.
 */
console.log('test');

var http=require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('Hello world!');
    response.end();
}).listen(process.env.PORT || 3000);
