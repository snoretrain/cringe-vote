import { Router } from 'death-adder';
import authMiddleware from '../middleware/auth-middleware';
import UsersEndpoint from '../endpoints/users-endpoint';

const protectedRouter = new Router();

protectedRouter.addMiddleware(authMiddleware);
protectedRouter.addHandler('/users', UsersEndpoint);

export default protectedRouter;
