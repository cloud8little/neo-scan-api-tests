const fixtures = require('../fixtures/getNode');

describe('GET /get_all_nodes', () => {
  it('should be online', () => {
    return fixtures
      .getAllNodes()
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});
