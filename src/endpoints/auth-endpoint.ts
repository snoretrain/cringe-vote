import { Endpoint, Request, Response } from 'death-adder';

class AuthenticationEndpoint extends Endpoint {
  /**
   * Authenticates a user.
   *
   * @param request - The request object
   * @param response - The response object
   * @returns null
   *
   */
  get(request: Request, response: Response) {
    response.send("you're in...");
  }
}

export default AuthenticationEndpoint;
