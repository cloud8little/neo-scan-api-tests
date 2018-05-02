const fixtures = require('../fixtures/getAddress');

describe('GET /get_address/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getAddress(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_address_abstracts/{hash_string}/{page}', () => {
  it('should be online', () => {
    return fixtures
      .getAddressAbstracts(process.env.WALLET_HASH, 1)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_address_neon/{hash_string}', () => {
  it('should be online', () => {
    return fixtures
      .getAddressNeon(process.env.WALLET_HASH)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_address_to_address_abstracts/{hash_string}/{hash_string}/{page}', () => {
  it('should be online', () => {
    return fixtures
      .getAddressToAddressAbstracts(process.env.WALLET_HASH, process.env.WALLET_HASH_SECONDARY, 1)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});
