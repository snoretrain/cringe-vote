import { Endpoint, Request, Response } from 'death-adder';

class UsersEndpoint extends Endpoint {
  // get all users
  async get(request: Request, response: Response) {
    const users = await request.attachments.db.query(
      'SELECT username FROM users;'
    );

    response.json(users);
  }

  // update a user
  async put(request: Request, response: Response) {
    const { id, username, email, password } = request.body;
    const update = await request.attachments.db.query(
      `UPDATE users
      SET username = ${username}, email = ${email}, password = ${password}
      WHERE id=${id};`
    );

    response.json(update);
  }
}

export default UsersEndpoint;
