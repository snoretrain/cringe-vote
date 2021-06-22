import { Request, Response } from 'death-adder';
import { createDbMiddleware } from '../middleware/db-middleware';

describe('db middleware', () => {
  it('should apply the transaction object to the request attachments', () => {
    const db = {
      tx: (f: Function) => {
        f('transaction object');
      }
    };
    const request = new Request(null);
    const response = new Response(request);
    createDbMiddleware(db)(request, response, () => {});
    expect(request.attachments.db).toBe('transaction object');
  });
});
