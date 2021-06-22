import { Request, Response } from 'death-adder';
import pgPromise, { ITask, IDatabase } from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  database: 'cringe-vote'
});

/**
 * Adds database transaction object to request attachments.
 *
 * @param request - The request object
 * @param response - The response object
 * @param callback - The callback function
 * @returns null
 *
 */
export const createDbMiddleware = (
  database: IDatabase<any> | any
) => {
  const dbMiddleware = (
    request: Request,
    response: Response,
    callback: Function
  ) => {
    database.tx(async (t: ITask<{}> | any) => {
      request.attachments = { db: t };
      await callback(true);
    });
  };

  return dbMiddleware;
};

export const dbMiddleware = createDbMiddleware(db);
