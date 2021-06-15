import { Request, Response } from 'death-adder';
import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  database: 'cringe-vote'
});

const dbMiddleware = (
  request: Request,
  response: Response,
  callback: Function
) => {
  db.tx(async (t) => {
    request.attachments = { db: t };
    await callback(true);
  });
};

export default dbMiddleware;
