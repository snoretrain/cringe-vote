import { Router } from 'death-adder';
import { dbMiddleware } from '../middleware/db-middleware';
import AuthenticationEndpoint from '../endpoints/auth-endpoint';
import protectedRouter from './protected-router';

const apiRouter = new Router();

apiRouter.addMiddleware(dbMiddleware);
apiRouter.addHandler('/login', AuthenticationEndpoint);
apiRouter.addHandler('/protected', protectedRouter);

export default apiRouter;
