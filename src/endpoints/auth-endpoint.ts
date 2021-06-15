import { Endpoint, Request, Response } from 'death-adder';

class AuthenticationEndpoint extends Endpoint {
  get(request: Request, response: Response) {
    response.send("you're in...");
  }
}

export default AuthenticationEndpoint;
