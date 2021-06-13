import { Server, Router } from 'death-adder';

const router = new Router();

const server = new Server(router, 3000);

server.listen();

export default server;
