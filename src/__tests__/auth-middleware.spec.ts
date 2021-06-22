import { Request, Response } from 'death-adder';
import authMiddleware from '../middleware/auth-middleware';

describe('Auth Middleware', () => {
  it('returns true when request is authorized', () => {
    const request = new Request(null);
    const response = new Response(request);
    request.headers.authorization = 'authenticated';
    expect(authMiddleware(request, response)).toBe(true);
  });
  it('returns false when request is not authorized', () => {
    const request = new Request(null);
    const response = new Response(request);
    expect(authMiddleware(request, response)).toBe(false);
  });
});
