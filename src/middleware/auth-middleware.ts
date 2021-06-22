import { Request, Response } from 'death-adder';

/**
 * Blocks requests that don't have required
 * authorization header.
 *
 * @param request - The request object
 * @param response - The response object
 * @returns null
 *
 */
const authMiddleware = (request: Request, response: Response) => {
  if (request.headers.authorization === 'authenticated') {
    return true;
  }
  response.unauthorized();
  return false;
};

export default authMiddleware;
