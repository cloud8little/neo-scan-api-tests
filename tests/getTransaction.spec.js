const fixtures = require('../fixtures/getTransaction');

describe('GET /get_transaction/{hash_string}', () => {
  it('should be online', () => {
    return fixtures.getLastTransactions().then(response => {
      const lastTxId = response.body[0].txid;
      return fixtures
        .getTransaction(lastTxId)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(expect.anything());
        });
    });
  });
});

describe('GET /get_last_transactions_by_address/{hash_string}/{page}', () => {
  it('should be online', () => {
    return fixtures
      .getLastTransactionsByAddress(process.env.WALLET_HASH, 1)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});
