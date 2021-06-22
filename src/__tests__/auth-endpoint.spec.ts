import AuthEndpoint from '../endpoints/users-endpoint';

describe('Auth Endpoint', () => {
  it('exists', () => {
    expect(AuthEndpoint).toBeDefined();
  });

  it('has a get method', () => {
    expect(new AuthEndpoint().get).toBeDefined();
  });
});
