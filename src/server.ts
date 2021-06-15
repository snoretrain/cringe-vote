import { Server, Router } from 'death-adder';
import apiRouter from './routers/api-router';

const baseRouter = new Router();
baseRouter.addHandler('/api', apiRouter);

const server = new Server(baseRouter, 3000);
server.listen();

export default server;
