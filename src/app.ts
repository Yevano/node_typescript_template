import * as finalhandler from 'finalhandler'
import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'
import * as serveStatic from 'serve-static'
 
console.log("Listening...")

// Serve up public/ftp folder
var serve = serveStatic('public', {'index': ['html/index.html']})
 
// Create server
var server = http.createServer((req: any, res: any) => {
    serve(req, res, finalhandler(req, res))
})
 
// Listen
server.listen(3000)