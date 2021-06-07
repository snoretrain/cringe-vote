import { Server, Router } from 'death-adder';

const router = new Router();

const server = new Server(router, 3000);

server.listen();
console.log("Cringe Vote server is listening.");

export default server;