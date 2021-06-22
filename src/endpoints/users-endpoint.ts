import { Endpoint, Request, Response } from 'death-adder';

class UsersEndpoint extends Endpoint {
  /**
   * Fetches all usernames from the database
   * and sends them in the response object.
   *
   * @param request - The request object
   * @param response - The response object
   * @returns null
   *
   */
  async get(request: Request, response: Response) {
    const users = await request.attachments.db.query(
      'SELECT username FROM users;'
    );

    response.json(users);
  }

  /**
   * Updates a user in the database
   * using values from the request object.
   *
   * @param request - The request object
   * @param response - The response object
   * @returns null
   *
   */
  async put(request: Request, response: Response) {
    const { username, email, password, id } = request.body;
    const values = [username, email, password, id];
    const queryString = `UPDATE users
    SET username = $1, email = $2, password = $3
    WHERE id=$4;`;
    const update = await request.attachments.db.query(
      queryString,
      values
    );

    response.json(update);
  }
}

export default UsersEndpoint;
