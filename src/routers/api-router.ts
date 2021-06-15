import { Router } from 'death-adder';
import dbMiddleware from '../middleware/db-middleware';
import AuthenticationEndpoint from '../endpoints/auth-endpoint';
import authRouter from './auth-router';

const apiRouter = new Router();

apiRouter.addMiddleware(dbMiddleware);
apiRouter.addHandler('/login', AuthenticationEndpoint);
apiRouter.addHandler('/auth', authRouter);

export default apiRouter;
