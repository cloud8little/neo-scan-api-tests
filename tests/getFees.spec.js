const fixtures = require('../fixtures/getFees');
const blockFixtures = require('../fixtures/getBlock');

describe('GET /get_fees_in_range/{from_height}-{to_height}', () => {
  it('should be online', () => {
    return blockFixtures.getHeight().then(response => {
      const blockHeight = response.body.height;
      return fixtures
        .getFeesInRange(blockHeight - 10000, blockHeight)
        .expect(200)
        .then(response => {
          expect(response).toEqual(expect.anything());
        });
    });
  });
});
