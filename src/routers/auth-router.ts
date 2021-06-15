import { Router } from 'death-adder';
import authMiddleware from '../middleware/auth-middleware';
import UsersEndpoint from '../endpoints/users-endpoint';

const authRouter = new Router();

authRouter.addMiddleware(authMiddleware);
authRouter.addHandler('/users', UsersEndpoint);

export default authRouter;
