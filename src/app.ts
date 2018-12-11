import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

console.log("Running server...")

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World!')
}).listen(8080)