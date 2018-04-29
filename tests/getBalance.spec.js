const fixtures = require('../fixtures/getBalance');

describe('GET /get_balance/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getBalance(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response).toEqual(expect.anything());
      });
  });
});
