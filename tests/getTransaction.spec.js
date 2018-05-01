const fixtures = require('../fixtures/getTransaction');
const _ = require('underscore');

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

describe('GET /get_last_transactions', () => {
  it('should be online', () => {
    return fixtures
      .getLastTransactions()
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

// todo: show each type as different test case
describe('GET /get_last_transactions/{type}', () => {
  it('should be online', () => {
    return fixtures.getLastTransactions().then(response => {
      const transTypes = _.uniq(_.pluck(response.body, 'type'));
      transTypes.forEach(type => {
        return fixtures
          .getLastTransactions(type)
          .expect(200)
          .then(response => {
            console.log(`Tested get_last_transactions for ${type} type.`);
            expect(response.body).toEqual(expect.anything());
          });
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
