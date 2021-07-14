import aedes0 from "aedes";
import {createServer} from "http";
import ws from "websocket-stream";

const aedes = aedes0();
const httpServer = createServer();
const port = 8888;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port);
});
