const fixtures = require('../fixtures/getBlock');

describe('GET /get_height', () => {
  it('should be online', () => {
    return fixtures
      .getHeight()
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.anything());
      });
  });
});

describe('GET /get_block/{hash_string}', () => {
  it('should be online', () => {
    return fixtures.getHeight().then(response => {
      const blockHeight = response.body.height;
      return fixtures.getBlock(blockHeight).then(response => {
        const blockHash = response.body.hash;
        return fixtures
          .getBlock(blockHash)
          .expect(200)
          .then(response => {
            expect(response.body).toEqual(expect.anything());
          });
      });
    });
  });
});

describe('GET /get_block/{height}', () => {
  it('should be online', () => {
    return fixtures.getHeight().then(response => {
      const blockHeight = response.body.height;
      return fixtures
        .getBlock(blockHeight)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(expect.anything());
        });
    });
  });
});
