import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Service | data-fetcher', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('the length of fecthed data array is > 1', async function (assert) {
    let service = this.owner.lookup('service:data-fetcher');

    let result = await service.fetchKeywordResults();
    assert.ok(result.length > 1, 'Data is fetched and parsed successfully');
  });
});
