import { Request, Response } from 'death-adder';

const authMiddleware = (request: Request, response: Response) => {
  if (request.headers.authorization === 'authenticated') {
    return true;
  }
  response.unauthorized();
  return false;
};

export default authMiddleware;
