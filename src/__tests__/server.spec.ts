import server from '../server';

describe('Server', () => {
  afterAll(() => {
    server.terminate();
  });
  it('exists', () => {
    expect(server).toBeDefined();
  });
});
