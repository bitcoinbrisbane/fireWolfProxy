const {assert} = require('chai');
const lros = require('../app.js');

describe('app', async function () {
  it.skip('should get aud btc rate', async function () {
    const actual = await lros.getRate('BTC', 'AUD');
    assert.isTrue(actual > 0);
  });
});