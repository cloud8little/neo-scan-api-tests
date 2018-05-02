const fixtures = require('../fixtures/getAsset');

describe('GET /get_asset/{hash_string}', () => {
  it('should be online', () => {
    return fixtures.getAssets().then(response => {
      const firstAssetTxid = response.body[0].txid;
      return fixtures
        .getAsset(firstAssetTxid)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(expect.anything());
        });
    });
  });
});

describe('GET /get_assets', () => {
  it('should be online', () => {
    return fixtures
      .getAssets()
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});
