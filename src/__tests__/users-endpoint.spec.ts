import UsersEndpoint from '../endpoints/users-endpoint';

describe('Users Endpoint', () => {
  it('exists', () => {
    expect(UsersEndpoint).toBeDefined();
  });

  it('has a get method', () => {
    expect(new UsersEndpoint().get).toBeDefined();
  });

  it('has a put method', () => {
    expect(new UsersEndpoint().put).toBeDefined();
  });
});
