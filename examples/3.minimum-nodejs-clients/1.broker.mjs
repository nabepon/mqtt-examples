import aedes from "aedes";
import {createServer} from "net";

const _aedes = aedes();
const server = createServer(_aedes.handle);
const port = 1883;

server.listen(port, function () {
  console.log('server started and listening on port ', port)
});
